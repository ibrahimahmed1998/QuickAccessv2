prog = [ {name: "database", val: "../HTML/Prog/1database.html"}
,{name: "UI-UX", val: "../HTML/Prog/2UI-UX.html"}
,{name: "Mobile", val: "../HTML/Prog/3mobile.html"}
,{name: "Security", val: "../HTML/Prog/4security.html"}
,{name: "EN-CS", val: "../HTML/Prog/5en_cs.html"}
,{name: "AR-CS", val: "../HTML/Prog/6ar_cs.html"}
,{name: "AR-MATH", val: "../HTML/Prog/7ar_math.html"}
,{name: "TIPS", val: "../HTML/Prog/tips.html"}
,{name: "3D Printing", val: "../HTML/Prog/93d_printing.html"}
,{name: "Challenge", val: "../HTML/Prog/challenge.html"}
,{name: "Programs", val: "../HTML/Prog/software_programs.html"}
,{name: "Graphics", val: "../HTML/Prog/graphics.html"}]

job = [ {name: "Advise", val: "../HTML/Jobs/job_links.html"}
,{name: "Cheat", val: "../HTML/Jobs/job_links.html"}
,{name: "Companies", val: "../HTML/General/egy_comp.html"}]

general = [ {name: "Cycle App", val: "../HTML/General/0cycle.html"}
,{name: "ABC", val: "../HTML/General/abc.html"}
,{name: "Maintenance", val: "../HTML/General/class_b.html"}
,{name: "Stores", val: "../HTML/General/MARKETS.html"}
,{name: "Ecomony Yutub", val: "../HTML/General/eco_yutub.html"}
,{name: "egy_comp", val: "../HTML/General/egy_comp.html"}
,{name: "Libraries", val: "../HTML/General/Library.html"}
,{name: "Medicine & Care ", val: "../HTML/General/teb.general.html"}
,{name: "Udemy Profiles", val: "../HTML/General/udemy.general.html"}
]

arr=[];
///////////////////////////////////////////  //////////////////////////////////////////////////////
const sidebar = document.querySelector('.sidebar');

switch (sidebar.id){
case 'prog':arr = prog; break;
case 'jobs':arr = job; break;
case 'general':arr = general; break;
default: alert("404"); break;}

const create = (f, g, d, e, c) => { let b = document.createElement(g); return f.appendChild(b), d && (b.className = d),e && (b.textContent = e), c && b.setAttribute(c.name, c.val), b }

arr.forEach(element => {
create(sidebar,'a',null,element.name,{name:"href",val:element.val}); });