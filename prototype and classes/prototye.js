//__proto__ and prototype

/*
__proto__ is present in all objects and used in the lookup chain to resolve methods.
__proto__  refers to the prototye of the the function which created it. 
*/

console.log("---------------Object------------------");
var obj1 = {
    prop1: 1,
    prop2: 2
}
console.log("obj1 :",obj1);
console.log("obj1 __proto__", obj1.__proto__); // will be equal to the prototype of the Object function
console.log("obj1 Prototype", obj1.prototype); //undefiend 
console.log("Object Prototype :",Object.prototype);
console.log("Object __proto__ :", Object.__proto__);
console.log("Object Type :" ,typeof Object); // is Funciton.

//prototype is an object present on functions and is refered by instances if they are created using new keyword.
console.log("---------------Function------------------")
function sum() {
    console.log("sum");
}
console.log("Sum :" , sum);
console.log("sum  __proto__", sum.__proto__); // will be equal to the prototype of the Funciton
console.log("sum Prototype", sum.prototype);  // consturcture
console.log("Function Prototype :", Function.prototype);
console.log("Function __proto__ :", Function.__proto__);
console.log("Function Type :" ,typeof Function)//function


console.log("---------------Prototype Basic Example------------------");

//Basic Example of creating Objects using constructor.

var personobj1 = {
    name : "abc",
}
var personobj2 = {
    age : 22
}

Object.setPrototypeOf(personobj2, personobj1)
console.log(personobj2.name);
console.log(personobj2.__proto__);
console.log(personobj1.prototype);  //undefined
console.log(personobj1.prototype); //undefined


console.log("litralObj __proto__", personobj1.__proto__); // refer to Object.protoype
console.log("litralObj prototype", personobj1.prototype); //undefined 

function Person(name) {
    this.name = name;
}
var Person1 = new Person("Name");

console.log("Parent function __proto__", Person.__proto__);
console.log("Parent function Prototype", Person.prototype);
console.log("Child function __proto__", Person1.__proto__);
console.log("Child function Prototype", Person1.prototype);

console.log("---------------Prototype Intermediate Example------------------");

function Animal() { }
Animal.prototype = {  // to add multiple properties at once;

    constructor: Animal,  // its important as by reassigning the prototype removes the constructor value.
    walk: function () {
        console.log(this.name, "can walk");
    },
    eat: function () {
        console.log(this.name, "can eat");
    }
}

function Birds(name) {
    this.name =name;
}

Birds.prototype = Object.create(Animal.prototype) // all fucntions of animals are copied in Birds prototype.
Birds.prototype.constructor = Birds; // in the above step constructor value is overridden , hence changing it back.
Birds.prototype.feather = function () { // function on Birds prototype.
    console.log("feather count 2")
};

let duck = new Birds("Duck");
duck.walk(); //from Animal;
duck.eat();  //from Animal;
duck.feather()  // form Bird;

// we can also override a method from the Animal Prototype
Birds.prototype.eat = function () {
    console.log(this.name , "from the birds.")
}

duck.eat() //  from birds.


console.log(duck.constructor === Animal)//  false coz we changed the Birds.prototype.constructor to birds
console.log(Birds.prototype.constructor === Birds)//  false coz we changed the Birds.prototype.constructor to birds
console.log(Animal.prototype.isPrototypeOf(duck)) //true as inherites property from animal
console.log(Birds.prototype.isPrototypeOf(duck)); // true as duck  inherites property from birds.
console.log(duck instanceof Birds); // true
console.log(duck instanceof Animal); // true
console.log("Animal function __proto__", Animal.__proto__);
console.log("Animal function Prototype", Animal.prototype);
console.log("Birds function __proto__", Birds.__proto__);
console.log("Birds function Prototype", Birds.prototype);
console.log("duck __proto__ " , duck.__proto__)

console.log("---------------Prototype Special Cases------------------");

function a() { }
a.prototype = { val : "previous"};
var b = new a();
a.prototype= { val : "new"};
var c = new a();
console.log(b.val  , b.__proto__);
console.log(c.val, c.__proto__);
/*
chaging value in prototype like this will only change it for the new instance,
old instances will have the same old value.
*/


function func() {
    this.b = 1;
}
func.prototype.b = 2;
var fun = new func;
console.log(fun.b);
/* 
if val is present at both constructor and prototype chain,
constructor one is given priority.
*/



