prog = [
 {name: "Database", val: "../HTML/Prog/database.html"}
,{name: "Mobile", val: "../HTML/Prog/mobile.html"}
,{name: "Security", val: "../HTML/Prog/Security.html"}
,{name: "EN-CS", val: "../HTML/Prog/en_cs.html"}
,{name: "AR-CS", val: "../HTML/Prog/ar_cs.html"}
,{name: "AR-MATH", val: "../HTML/Prog/ar_math.html"}
,{name: "TIPS", val: "../HTML/Prog/tips.html"}
,{name: "3D Printing", val: "../HTML/Prog/3d_printing.html"}
,{name: "Challenge", val: "../HTML/Prog/Challenge.html"}
,{name: "Programs", val: "../HTML/Prog/software_programs.html"}
,{name: "UI-UX", val: "../HTML/Prog/UI-UX.html"}
,{name: "Graphics", val: "../HTML/Prog/Graphics.html"}]

job = [
{name: "Advise", val: "../HTML/Jobs/job_links.html"}
,{name: "Cheat", val: "../HTML/Jobs/job_links.html"}
,{name: "Companies", val: "../HTML/General/egy_comp.html"}]


general = [
    {name: "abc", val: "../HTML/General/abc.html"}
,{name: "Maintenance", val: "../HTML/General/class_b.html"}
,{name: "Stores", val: "../HTML/General/MARKETS.html"}
,{name: "Ecomony Yutub", val: "../HTML/General/eco_yutub.html"}
,{name: "egy_comp", val: "../HTML/General/egy_comp.html"}
,{name: "Libraries", val: "../HTML/General/Library.html"}
,{name: "Medicine & Care ", val: "../HTML/General/teb.html"}]

arr = [];

const sidebar = document.querySelector('.sidebar');

switch (sidebar.id){
case 'prog':arr = prog; break;
case 'jobs':arr = job; break;
case 'general':arr = general; break;
default: alert("404"); break;
}


console.log(sidebar.id);

const create = (f, g, d, e, c) => { let b = document.createElement(g); return f.appendChild(b), d && (b.className = d),e && (b.textContent = e), c && b.setAttribute(c.name, c.val), b }

const div =  create(sidebar,'div',null,null,null);
arr.forEach(element => {
create(div,'a',null,element.name,{name:"href",val:element.val});
});
