const links = ["3"], 
create_e = (root, ele, d, txt, c) => { 
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
 const trans = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "https://translate.google.com" }); 
 const cs = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "cs.htm" }); 

create_e(a,"b", "imgheader", "Linkedin", {name:"src",val:"../IMG/in.png"}), 
create_e(yu,"b", "imgheader", "youtube", {name:"src",val:"../IMG/youbtube.png"}), 
create_e(trans,"b", "imgheader", "Translate", {name:"src",val:"../IMG/youbtube.png"}), 
create_e(cs,"b", "imgheader", "CS", {name:"src",val:"../IMG/youbtube.png"}), 

create_e(div1, "div", "collapse navbar-collapse", null, { name: "id", val: "navbarResponsive" }); 
const element4 = document.querySelector("#navbarResponsive"), 
ul = create_e(element4, "ul", "navbar-nav ms-auto", null, { name: "id", val: "ul1" }); 

links.forEach((c, b) => { let d = c[b] = create_e(ul, "li", "nav-item", null, { name: "id", val: "li" + b }); 

if(links[b] =="AR_CS" || links[b] =="P1" ||   links[b] =="Body" || links[b] =="2" || links[b] =="3" )
 {create_e(d, "a", "nav-link", links[b], { name: "href", val: `${links[b]}.htm` });     }
else{ create_e(d, "a", "nav-link", links[b], { name: "href", val: `${links[b]}.html` })  }
})
  
