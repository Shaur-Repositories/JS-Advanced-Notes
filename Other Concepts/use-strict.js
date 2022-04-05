/*
a = 10;
console.log(a) // here a will be delared as var a; 

//'use strict'; should be declared either at the top of the file or at the begining of the function.

*/

'use strict';

a = 9;
console.log(a) //Uncaught ReferenceError: a is not defined , coz of strict mode.

// let obj = {name: 'Carla'};
// delete obj; // throws an error

function hello(p1, p1) {
  console.log("hello");
} // throws an error

hello(); // error as p1,p1 duplicated parameters are not allowed


/*
Assigning to a non-writable property is not allowed.
let obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
assignment to a non-writable property
obj1.x = 9; // throws an error


Assigning to a getter-only property is not allowed.
let obj2 = { get x() { return 17; } };
assignment to a getter-only property
obj2.x = 5; // throws an error


Assigning to a new property on a non-extensible object is not allowed.
let obj = {};
Object.preventExtensions(obj);
// Assignment to a new property on a non-extensible object
obj.newValue = 'new value'; // throws an error


Octal syntax is not allowed.
let a = 010; // throws an error

The variable name arguments and eval are not allowed.
let arguments = 'hello'; // throws an error
let eval = 44;

You cannot also use these reserved keywords in strict mode.
implements, interface, let, package, private, protected, public, static, yield

*/