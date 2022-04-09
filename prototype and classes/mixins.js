/*
Mixins is way of copying a particular functionality  to a class ,function or object.
for classes  - a mixin is a class containing methods that can be used by other classes without a need to inherit from it.
mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.
*/

// var mixin = function() {  // mixin method to be added on object
//         console.log("Hi , I'm Mixin");
// }
    
var mixin = {  //for fucntions and classes mixin should be a object
    fly : function() {
    console.log("Hi , I'm Mixin");
    }
};

var obj = { 
  a: 1
}

function test() { // if we add mixin in prototype of test we can access it as text.mixin()
    var a = 10;
}

test.abc = function () { //to add function only accesable to test like static.
  console.log("abc");
}

function mixinAdd(obj1 , func) {
    // obj1.mixin = func; // to add to objects and function(like static)
    Object.assign(obj1.prototype, func) //to add/copyies to "classes and fuctions" prototype , also make sure that mixin is an object type as prototye is object
}


//to add in obj
// console.log(obj) 
// mixinAdd(obj)
// console.log(obj)


// to add to function test
console.log(test) 
mixinAdd(test, mixin)

//below line will work if test.mixin is used
// console.log(test.mixin())


// below 2 will work if object.assign is used to put function on prototype.
console.log(test.prototype)
console.log(test.prototype.fly())

