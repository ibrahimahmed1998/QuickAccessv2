prog = [ 
,{name: "Security", val: "../HTML/Prog/4security.html"}
,{name: "AR-MATH", val: "../HTML/Prog/7ar_math.html"} 
] 

arr=[];

const sidebar = document.querySelector('.sidebar');

switch (sidebar.id){
case 'prog':arr = prog; break;
case 'jobs':arr = job; break;
case 'general':arr = general; break;
default: alert("404"); break;}

const create = (f, g, d, e, c) => { let b = document.createElement(g); return f.appendChild(b), d && (b.className = d),e && (b.textContent = e), c && b.setAttribute(c.name, c.val), b }

arr.forEach(element => {
create(sidebar,'a',null,element.name,{name:"href",val:element.val}); });