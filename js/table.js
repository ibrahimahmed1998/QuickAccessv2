create_e = (f, g, d, e, c) => { let b = document.createElement(g); return f.appendChild(b), d && (b.className = d),e && (b.textContent = e), c && b.setAttribute(c.name, c.val), b }
const body2 = document.querySelector("#test");
const links = document.querySelectorAll('.x');
const nav = document.querySelector('nav');

body2.innerHTML="";

body2.appendChild(nav);
const divall = create_e(body2,'div','all',null,null);
create_e(divall,'div','inline',null,null);

const table = create_e(body2,'table',null,null,{name:'style',val:'border:2px solid black;'});
for (let i = 0; i < links.length; i++) {
    
    if (i%3==0){
       var tr =  create_e(table,'tr',null,null,null);
    }
    const td = create_e(tr,'td',null,null,null);
     create_e(td,'a',null,links[i].textContent,{name:'href',val:links[i].href});
    }

 