// Follow the system dark/light theme automatically, with an optional temporary toggle.
(() => {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = new URL('../css/theme.css', document.currentScript.src).href;
    document.head.appendChild(stylesheet);

    const STORAGE_KEY = 'quickaccess-theme-v2';
    const media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
    const getSystemTheme = () => (media && media.matches ? 'light' : 'dark');

    try { localStorage.removeItem('quickaccess-theme'); } catch { }

    const resolveTheme = () => {
        const sys = getSystemTheme();
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const saved = JSON.parse(raw);
                if (saved && saved.system === sys && (saved.theme === 'light' || saved.theme === 'dark')) {
                    return saved.theme;
                }
                localStorage.removeItem(STORAGE_KEY);
            }
        } catch { }
        return sys;
    };

    document.documentElement.dataset.theme = resolveTheme();

    const init = () => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'theme-toggle';
        const update = () => {
            const isLight = document.documentElement.dataset.theme === 'light';
            const followingSystem = document.documentElement.dataset.theme === getSystemTheme();
            button.textContent = isLight ? '☾ Dark mode' : '☀ Light mode';
            button.title = followingSystem
                ? 'Following system theme — click to switch'
                : 'Manual override — click to switch (resets when system theme changes)';
            button.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
            button.setAttribute('aria-pressed', String(isLight));
        };
        button.addEventListener('click', () => {
            const sys = getSystemTheme();
            const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
            document.documentElement.dataset.theme = theme;
            try {
                if (theme === sys) localStorage.removeItem(STORAGE_KEY);
                else localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, system: sys }));
            } catch { }
            update();
        });
        const onSystemChange = () => {
            try { localStorage.removeItem(STORAGE_KEY); } catch { }
            document.documentElement.dataset.theme = getSystemTheme();
            update();
        };
        if (media) {
            if (media.addEventListener) media.addEventListener('change', onSystemChange);
            else if (media.addListener) media.addListener(onSystemChange);
        }
        update();
        document.body.appendChild(button);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();
})();

const links = [], create_e = (root, ele, d, txt, c) => { 
    let b = document.createElement(ele); return root.appendChild(b),
    d && (b.className = d),
    txt && (b.textContent = txt),
    c && b.setAttribute(c.name, c.val),
    b }

const body = document.querySelector("body");
 
const className = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top";
const nav = create_e(body, "nav", className, null, { name: "id" ,val:"mainNav" } );
const div1 = create_e(nav, "div", "container px-4", null, { name:"id" , val:"div1" });
   
 const a = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "https://www.linkedin.com" }); 
 const yu = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "https://www.youtube.com/feed/subscriptions" });
 const AI = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "AI.html" });
 const CS = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "CS/CS.html" });
 const More = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "More.html" });
 const Local = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "Local.html" }); 
 const Projects = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "Projects/Projects.html" });
 Projects.style.setProperty("color", "#23B5D3", "important");
 const Other = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "Other.htm" });
 const Gmail = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "https://gmail.com" });
 Gmail.style.setProperty("color", "red", "important");
//  const GPT = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "https://chatgpt.com/?model=gpt-4o" }); 
 
 
create_e(a,"b", "imgheader", "Linkedin", {name:"src",val:"../IMG/in.png"}), 
create_e(yu,"b", "imgheader", "Youtube", {name:"src",val:"../IMG/youbtube.png"}),
create_e(AI,"b", "imgheader", "AI", {name:"src",val:"../IMG/youbtube.png"}),
create_e(CS,"b", "imgheader", "CS", {name:"src",val:"../IMG/youbtube.png"}),
create_e(More,"b", "imgheader", "More", {name:"src",val:"../IMG/youbtube.png"}),
create_e(Local,"b", "imgheader", "Local", {name:"src",val:"../IMG/youbtube.png"}), 
create_e(Projects,"b", "imgheader", "Projects", {name:"src",val:"../IMG/youbtube.png"}),
create_e(Other,"b", "imgheader", "Other", {name:"src",val:"../IMG/youbtube.png"}),
create_e(Gmail,"b", "imgheader", "Gmail", {name:"src",val:"../IMG/youbtube.png"}),
// create_e(GPT,"b", "imgheader", "GPT", {name:"src",val:"../IMG/youbtube.png"}), 

create_e(div1, "div", "collapse navbar-collapse", null, { name: "id", val: "navbarResponsive" }); 

const element4 = document.querySelector("#navbarResponsive"), 
ul = create_e(element4, "ul", "navbar-nav ms-auto", null, { name: "id", val: "ul1" }); 

links.forEach((c, b) => { let d = c[b] = create_e(ul, "li", "nav-item", null, { name: "id", val: "li" + b }); 

if(  links[b] =="2" || links[b] =="Other"  )
 {create_e(d, "a", "nav-link", links[b], { name: "href", val: `${links[b]}.htm` });     }
else{ create_e(d, "a", "nav-link", links[b], { name: "href", val: `${links[b]}.html` })  }
})
  
