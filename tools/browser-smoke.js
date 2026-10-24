// Checks the original layout and appearance toggle using Edge; no dependencies.
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const server = http.createServer((req, res) => {
    const filename = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!filename.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    fs.readFile(filename, (error, content) => {
      if (error) { res.writeHead(404); res.end(); return; }
      res.setHeader('Content-Type', ({ '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html; charset=utf-8' })[path.extname(filename)] || 'application/octet-stream');
      res.end(content);
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}`;
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'quickaccess-browser-'));
  const edge = process.env.EDGE_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
  const browser = spawn(edge, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank'], { windowsHide: true, stdio: 'ignore' });
  let socket;
  try {
    let port;
    for (let i = 0; i < 100; i++) {
      try { port = fs.readFileSync(path.join(profile, 'DevToolsActivePort'), 'utf8').split('\n')[0]; break; } catch { await pause(100); }
    }
    assert.ok(port, 'Browser started');
    const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
    socket = new WebSocket(tabs.find(tab => tab.type === 'page').webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { socket.addEventListener('open', resolve); socket.addEventListener('error', reject); });
    let sequence = 0; const pending = new Map(), errors = [];
    socket.addEventListener('message', event => {
      const message = JSON.parse(event.data);
      if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails.text);
      if (pending.has(message.id)) { const { resolve, reject } = pending.get(message.id); pending.delete(message.id); message.error ? reject(new Error(JSON.stringify(message.error))) : resolve(message.result); }
    });
    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const id = ++sequence;
      const timer = setTimeout(() => { pending.delete(id); reject(new Error(`DevTools timeout: ${method}`)); }, 15000);
      pending.set(id, { resolve: value => { clearTimeout(timer); resolve(value); }, reject: error => { clearTimeout(timer); reject(error); } });
      socket.send(JSON.stringify({ id, method, params }));
    });
    const evaluate = async expression => {
      const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
      if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
      return result.result.value;
    };
    const waitFor = async expression => {
      for (let i = 0; i < 100; i++) { if (await evaluate(expression)) return; await pause(100); }
      throw new Error(`Timed out: ${expression}`);
    };
    await send('Runtime.enable'); await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
    const visitTheme = async file => {
      await send('Page.navigate', { url: url + '/' + file });
      await waitFor('document.readyState === "complete" && !!document.querySelector(".theme-toggle")');
    };
    await visitTheme('HTML/1.html');
    assert.equal(await evaluate('document.querySelectorAll("table.mind").length'), 4);
    assert.equal(await evaluate('document.querySelectorAll(".qa-sidebar,.qa-main").length'), 0);
    assert.equal(await evaluate('document.documentElement.dataset.theme'), 'dark');
    assert.equal(await evaluate('getComputedStyle(document.body).backgroundColor'), 'rgb(0, 0, 0)');
    await evaluate('document.querySelector(".theme-toggle").click()');
    assert.equal(await evaluate('document.documentElement.dataset.theme'), 'light');
    assert.equal(await evaluate('getComputedStyle(document.body).backgroundColor'), 'rgb(247, 249, 252)');
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(os.tmpdir(), 'quickaccess-light.png'), Buffer.from(shot.data, 'base64'));
    await visitTheme('HTML/AI.html');
    assert.equal(await evaluate('document.documentElement.dataset.theme'), 'light');
    await evaluate('document.querySelector(".theme-toggle").click()');
    await visitTheme('HTML/1.html');
    assert.equal(await evaluate('document.documentElement.dataset.theme'), 'dark');
    await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
    assert.equal(await evaluate('getComputedStyle(document.querySelector(".theme-toggle")).position'), 'fixed');
    await visitTheme('HTML/AI/AI%20Concepts.html');
    assert.equal(await evaluate('document.querySelectorAll("#rows tr").length'), 25);
    await evaluate('document.querySelector("#search").value="neural network";document.querySelector("#search").dispatchEvent(new Event("input"))');
    assert.ok(await evaluate('document.querySelectorAll("#rows tr").length > 0'));
    await evaluate('document.querySelector("#add").click()');
    assert.equal(await evaluate('document.querySelector("#editor").open'), true);
    await evaluate('document.querySelector("#cancel").click();document.querySelector(".theme-toggle").click()');
    assert.equal(await evaluate('document.documentElement.dataset.theme'), 'light');
    await send('Page.navigate', { url: 'file:///' + path.join(root, 'HTML/AI/AI Concepts.html').replaceAll(path.sep, '/') });
    await waitFor('document.readyState === "complete" && !!document.querySelector(".theme-toggle")');
    assert.equal(await evaluate('[...document.querySelectorAll("#mainNav a")].some(a=>a.href.endsWith("/HTML/AI.html"))'), true);
    await evaluate('window.exportedHTML=""; URL.createObjectURL=blob=>{window.exportedHTML=blob.text();return "blob:test"};HTMLAnchorElement.prototype.click=function(){};document.querySelector("#download").click()');
    const exported = await evaluate('window.exportedHTML');
    assert.ok(exported.includes('--field:#101c2a') || exported.includes('--field: #101c2a'), 'Export contains offline styles');
    const exportFile = path.join(root, 'tools', 'concepts-export-check.html');
    fs.writeFileSync(exportFile, exported);
    try {
      await send('Page.navigate', { url: 'file:///' + exportFile.replaceAll(path.sep, '/') });
      await waitFor('document.readyState === "complete" && document.querySelectorAll("#rows tr").length === 25');
      assert.equal(await evaluate('document.querySelectorAll("link[rel=stylesheet],script[src]").length'), 0);
      await evaluate('document.querySelector(".theme-toggle").click()');
      assert.equal(await evaluate('document.documentElement.dataset.theme'), 'light');
    } finally { fs.unlinkSync(exportFile); }
    assert.deepEqual(errors, []);
    console.log('PASS: Original layout and dark styling restored; light mode, cross-page persistence, and mobile toggle verified.');
  } finally {
    socket?.close(); browser.kill(); server.close();
    // The OS temp profile is intentionally left for browser shutdown to finish safely.
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
