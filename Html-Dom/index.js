console.log(document)
console.dir(document)
/*
getElementsByClassName  give a live list  -- will update when something changes
querySelectorAll gives static list -- will not update if some thing changes
*/
let test1class = document.getElementsByClassName("test1");
let test1query = document.querySelectorAll(".test1");
let test1query1 = document.querySelector(".test1");

console.log(test1class); // will give html collection --array like obj --for loop
console.log(test1query); // will give node list --array like obj - for and forEach loop
console.log(test1query1); // will give 1 element of class test1

test1query1.style.color = "white";
test1query1.style.fontSize = "100px" //camel case for css properties

test1query1.textContent = "white"; // replaces the text; will show whole text (hidden and visible)
console.log("text Context of 1st test1 :",test1query1.textContent);
test1query1.innerText = "white Visible"; // replaces the text; will show only visible text
console.log("inner text of 1st test1 :", test1query1.innerHTML);


let link = document.getElementById("link1")
console.log("link id :", link.getAttribute("href")) // href value
link.setAttribute("href", "http:\\nolink.com");
link.innerHTML = "nolink"
console.log("link id :", link.getAttribute("href")); 

//nodes
let doc = document.getRootNode() // parent == document
console.log(doc.childNodes) // <! docType> at 0 and <html> at 1
let htm = doc.childNodes[1]
console.log(htm.parentNode) //parent of htm is document.
console.log(htm.childNodes) //NodeList(3) [head, text, body]0: head1: text2: bodylength: 3[[Prototype]]: NodeList  ;;;; the "text" here is the white space in code


/*
white space are not rendered on the web page coz of css property
*{
    white-space : normal;
}
if you want white spacees change it to

*{
    white-space : pre;
}
*/
console.log(htm.children) // gives HTML collection , with no white spaces

let multiClass = document.querySelector(".a")
console.log(multiClass.classList) //DOMTokenList(4) ['a', 'b', 'c', 'd', value: 'a b c d']

//class list methods .add .remove .contains .toogle

console.log("aa exits :",multiClass.classList.contains("aa"))
console.log("a exits :" ,multiClass.classList.contains("a"))
 
multiClass.classList.add("z")
console.log("z class added:",multiClass.classList)

multiClass.classList.remove("z");
console.log("z class removed:",multiClass.classList);

multiClass.classList.toggle("z");
console.log("z class toogled:", multiClass.classList);

// creating and adding element
let list1 = document.getElementById("list1")
console.log(list1)
let Li = document.createElement("li");
Li.textContent = "new Element"
console.log(Li)
Li.classList.add("li1")
// list1.append(Li)
list1.prepend(Li)
console.dir(list1.children)

//cloning elemets
let l2 = list1
console.log(l2.children)

l2 = list1.cloneNode(true)
console.log(l2);

// insert adject element
let p1 = document.createElement("p")
p1.textContent = `I'm a new para created in js`

list1.before(p1) // p1 will be added before list1, 
list1.after(p1)
console.log(htm.children[1].children)

p1.remove() // removes the 1st p1 from the dom tree

list1.insertAdjacentElement("beforeBegin", p1) // before
console.log( "p1 added beforeBegin :",htm.children[1].children);
list1.insertAdjacentElement("afterBegin", p1); // first child
console.log(htm.children[1].children);
list1.insertAdjacentElement("beforeEnd", p1);  // last child
console.log(htm.children[1].children);  
list1.insertAdjacentElement("afterEnd", p1); // after
console.log(htm.children[1].children);
console.log(list1.children)

//get dimension of element
let child = document.getElementById("child")
console.log(child.getBoundingClientRect())