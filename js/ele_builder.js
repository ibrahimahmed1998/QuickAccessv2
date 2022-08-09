const new_ele = (parent, ele, txt, classes, attribute) => {
    const myEle = document.createElement(ele)
    parent.appendChild(myEle)
    if (classes) myEle.className = classes
    if (txt) myEle.textContent = txt
    if (attribute) myEle.setAttribute(attribute.name, attribute.val) // {name:"id", val:"1"}
    return myEle
}