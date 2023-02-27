const links = ["111","2","3","EN_CS","AR_CS","P1","P2","JOBS","Marketing","Inside"], 
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
   
// const a = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "https://www.linkedin.com/in/ibrahimahmed1998" }); 
const yu = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "https://www.youtube.com/feed/subscriptions" }); 
const git = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "https://github.com/ibrahimahmed1998" }); 
const gpt = create_e(div1, "a", "navbar-brand", null, { name: "href", val: "https://chat.openai.com/chat" }); 

// create_e(a,"img", "imgheader", null, {name:"src",val:"../IMG/in.png"}), 
create_e(yu,"img", "imgheader", null, {name:"src",val:"../IMG/youbtube.png"}), 
create_e(git,"img", "imgheader", null, {name:"src",val:"../IMG/github-min.png"}), 
create_e(gpt,"img", "imgheader", null, {name:"src",val:"../IMG/chatgpt.jpg"}), 


create_e(div1, "div", "collapse navbar-collapse", null, { name: "id", val: "navbarResponsive" }); 
const element4 = document.querySelector("#navbarResponsive"), 
ul = create_e(element4, "ul", "navbar-nav ms-auto", null, { name: "id", val: "ul1" }); 

links.forEach((c, b) => { let d = c[b] = create_e(ul, "li", "nav-item", null, { name: "id", val: "li" + b }); 

if(links[b] =="JOBS" || links[b] =="P1" )
 {
    create_e(d, "a", "nav-link", links[b], { name: "href", val: `${links[b]}.htm` });    
 }

else{ create_e(d, "a", "nav-link", links[b], { name: "href", val: `${links[b]}.html` })  }

})
  
