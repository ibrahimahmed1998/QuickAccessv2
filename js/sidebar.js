prog = [ {name: "database", val: "../HTML/Prog/1database.html"}
,{name: "Mobile", val: "../HTML/Prog/3mobile.html"}
,{name: "Security", val: "../HTML/Prog/4security.html"}
,{name: "AR-MATH", val: "../HTML/Prog/7ar_math.html"}
,{name: "TIPS", val: "../HTML/Prog/tips.html"}
,{name: "3D Printing", val: "../HTML/Prog/93d_printing.html"}
,{name: "Programs", val: "../HTML/Prog/software_programs.html"}
,{name: "Graphics", val: "../HTML/Prog/graphics.html"}]

job = [ {name: "Advise", val: "../HTML/Jobs/job_links.html"}
,{name: "Cheat", val: "../HTML/Jobs/job_links.html"}
,{name: "Companies", val: "../HTML/General/egy_comp.html"}]

general = [  
 ,{name: "egy_comp", val: "../HTML/General/egy_comp.html"}
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