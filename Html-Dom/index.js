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
let child2 = document.getElementById("child")
console.log(child2.getBoundingClientRect())

//click Events

let btn1 = document.getElementById("event");
btn1.addEventListener('click', function () {
    alert("from add event listener")
    this.innerText = "hahhahaha" // this points to btn.
})

// function clk1() {
//     alert("from html : onClick=(clk1())")
// }
let clk1 = () => {
    alert("from html : onClick=(clk1())");
    console.log(this) // this in arrow function will point to the window / or their parent
}

let btn3 = document.getElementById("clkFun");
btn3.onclick = function () {
    alert("from js : btn3.onclick")
}

// event bubbling


console.log("Event Bubbling")
let garndparent = document.getElementById("grandparent")
let parent = document.getElementById("parent");
let child = document.getElementById("child");


function childClick() {
    console.log("child clicked")
}

function parentClick() {
  console.log("parent clicked");
}

function gpranetClick() {
  console.log("grandparent clicked");
}

// click events

// child.addEventListener("click", childClick()); // appending () after function name childClick() will call the function on file load; we dont want that behaviour
child.addEventListener("click", childClick)  // if child is clicked , bubbling will occur and childClick and gparentClick will be called
// coz of same event name.
parent.addEventListener("mouseover", parentClick) // click on this wll bubble and gparentClick will trigger as its the next click triggered function.
// garndparent.addEventListener("click", gpranetClick) // commented this for below senario to work


// changig event of garndparent to mouseover
garndparent.addEventListener("mouseover", gpranetClick); // here if we hover over parent the bubbleing will occur and parentclick
// and gparentclick will trigger as the event is same


console.log("Event Capturing")

let garndparent1 = document.getElementById("grandparent1");
let parent1 = document.getElementById("parent1");
let child1 = document.getElementById("child1");

// in addEventListener making 3rd param as true will enable capturing

/*
capturing is opposite of bubbling . it will go to the outer most dom node i.e body and check is same event is present on it or not.
and will trigger those same events (if present ) to its the lower level nodes to reach our clicked node.
if any parent in the chain dont have the same event , it will be skipped.
*/

/* commenting to make below code work.

child1.addEventListener("click", childClick, true);  // here if we click on child capturing will occure on those above nodes
// that have capturing enabled and have same event attached to it.
parent1.addEventListener("mouseover", parentClick,true); // parent have differnt event attached
garndparent1.addEventListener("click", gpranetClick, true);
// so the click on child1 will trigger gparentClick and childClick skipping the parent as the event is different
*/


child1.addEventListener("click", childClick, true); // child is clicked
parent1.addEventListener("click", parentClick); // capturing is disabled.
garndparent1.addEventListener("click", gpranetClick, true);
// here  the both capturing and bubbleing will happen becoz
// All the elements have click events and some of them don't have capturing enabled.
// when both capturing and bubbleing are to be occur , capturing happens first and den bubbleing
//so out put will be granparent fucntion , child fuction , den bubbling from child hence parent fucntion


console.log("event object")
let garndparente = document.getElementById("grandparente");
let parente = document.getElementById("parente");
let childe = document.getElementById("childe");


function childClicke(e) {
  console.log("child clicked", e.target);
}

function parentClicke(e) {
  console.log("parent clicked", e.target);
}

function gpranetClicke(e) {
    console.log("grandparent clicked", e.target);
     e.stopPropagation(); // to stop propogation in capturing once child is clicked
}

// childe.addEventListener("click", childClicke); // child chicked
// when chicking on child, bubbling happens and each function will gave same e.target i.e. the div with id = childe 
// threrfore html is smart enough

function childClickestopPropogation(e) {
  console.log("child clicked and propogation Stoped");
  e.stopPropagation(); // this will stop the propogation in capturing and bubbling phase
  // in catpuring pahse it will stop propogation once it encounter the "e.stopPropagation();" in higer parent elements 
  // in this case its garand parent.
}
childe.addEventListener("click", childClickestopPropogation ,true)
parente.addEventListener("click", parentClicke ,true); 
garndparente.addEventListener("click", gpranetClicke, true);

//click only once button
let once = document.getElementById("once");
once.addEventListener("click", () => {
    alert("I can only be clicked once")
}, {                    // this is another way in which we can add the 3rd parameter in addEventlistener to enable the captureing
    capture: true,     // enable the captureing
    once :true            //enable once  i.e. function can be cicked once
})

console.log("event deligation")
/*
this basically is a combination of event bubbling and evet object to add events to only parent element and having multiple functionalitis depending on the child element 
i.e. e.target is clicked.
*/
function btnclik(e) {
  alert(e.target.textContent);
}
let deligationDiv = document.getElementById("divofbtn");
deligationDiv.addEventListener("click", btnclik) // clicking on any child inside this div will create bubbling and when encounter  this 
// div it will trigger the btnclik function and output will be accourding to the child cliked.



