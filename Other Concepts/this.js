/*
What is this ?
*/

//

let a = this
console.log(this) // at global is window object

function abc() {
    console.log(this)
}
abc() // inside function at global level its window object


//constructor function
function Person(name) {
    this.name = name
    console.log(this) // this will refer to Person constructor

}

let person1 = new Person("ABC")
console.log(person1.name)

//this in functions in object
let objTest = {
    "a": "abc",
    "b": "def",
    greet() {// parent function
        console.log(this)  //this will point to the objTest
        console.log(this.a)
        function innerFun() {// inner function
            console.log("innder fun : " , this); // this will point to window obj
        }
        innerFun()
    }
}
objTest.greet()

// arrow function -> they dont have this..they refer to their parent's this


//arrow fun at global scope

let arrowfun = () => {
    console.log(this)
}
arrowfun() // window obj


// arrow function -> inside the object 

let objtest1 = {
    "a": "abc",
    "b": "xyz",
    funparent() {
        console.log("parent Fun : ", this) // this will point to the parent object
        let child = () => {
            console.log("child :", this) // arrow fun will point to the parent function, hence to object
            // if this is a normal function...then this inner child fun will point to global
        }
        child()
    }
}

objtest1.funparent()


//When this is used in a function with strict mode, this is undefined
function abc() {
    'use strict';
    console.log(this) // this is undefined
}
abc()

// function abc() { // this function will overwrite the above function defination
//     console.log("this is the second function defination")
// }