
create_e = (f, g, d, e, c) => { let b = document.createElement(g); return f.appendChild(b), d && (b.className = d),e && (b.textContent = e), c && b.setAttribute(c.name, c.val), b }
const div = document.querySelector(".subnav");
const subnav = create_e(div,'nav','navbar navbar-expand-lg navbar-dark bg-dark',null,{name:'id',val:'mainNav'});
const div1 = create_e(subnav,"div","container px-4",null,{name:'id',val:'div1'});
create_e(div1,'a','navbar-brand js-scroll-trigger',"Back",{name:'href',val:'../index.html'});
