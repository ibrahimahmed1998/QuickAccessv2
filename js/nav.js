const links = ['ENGLISH','MARKETING','007','HELO_WRLD','JOBS','GENERAL'] ; 

const create_e = (parent,tag,className,text,attr)=>{
    const ele = document.createElement(tag);
    parent.appendChild(ele);
    if(className){ele.className = className;}
    if(text) {ele.textContent = text;}
    if(attr) {ele.setAttribute(attr.name,attr.val); }
    return ele;}

const head = document.querySelector("#head");
const div1 = document.querySelector("#div1");
const div9 = document.querySelector("#div9");

create_e(head,'link',null,null,{rel:"icon",href:"../IMG/icon1.jpg",type:"image/x-icon"});

const a = create_e(div9,'a','navbar-brand',null,{name:"href" ,val:'index.html'} );
create_e(a,'b',null,'Quick Access',null);
create_e(div1,'div','collapse navbar-collapse',null,{name:"id" ,val:"navbarResponsive"});
const element4 = document.querySelector("#navbarResponsive");
const ul = create_e(element4,'ul','navbar-nav ms-auto',null,{name:"id",val:"ul1"});

links.forEach( (e,ind) => {
    const x =  e[ind] = create_e(ul,'li','nav-item',null,{name:"id",val:`li`+ind})
    create_e(x,'a','nav-link',links[ind],{name:"href", val:`${links[ind]}.html`});
 }); // thanks to dr\ marwa for code inhance 