const links = ["ENGLISH", "MARKETING", "PROGRAMMING", "JOBS", "GENERAL"], 
create_e = (f, g, d, e, c) => { let b = document.createElement(g); return f.appendChild(b), d && (b.className = d),e && (b.textContent = e), c && b.setAttribute(c.name, c.val), b }
const head = document.querySelector("#head");
const nav98 = document.querySelector(".nav98");
const className = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top";
const nav = create_e(nav98, "nav", className, null, { name: "id" ,val:"mainNav" } );
const div1 = create_e(nav, "div", "container px-4", null, { name:"id" , val:"div1" });
   
create_e(head, "link", null, null, { rel: "icon", href: "../IMG/icon1.jpg", type: "image/x-icon" });
const a = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "index.html" }); 
create_e(a, "b", null, "Quick Access", null), 
create_e(div1, "div", "collapse navbar-collapse", null, { name: "id", val: "navbarResponsive" }); 
const element4 = document.querySelector("#navbarResponsive"), 
ul = create_e(element4, "ul", "navbar-nav ms-auto", null, { name: "id", val: "ul1" }); 
links.forEach((c, b) => { let d = c[b] = create_e(ul, "li", "nav-item", null, { name: "id", val: "li" + b }); 
create_e(d, "a", "nav-link", links[b], { name: "href", val: `${links[b]}.html` }) })
 