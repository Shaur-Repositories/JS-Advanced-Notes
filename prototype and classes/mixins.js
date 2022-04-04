/*
Mixins is way of copying a particular functionality  to a class ,fucntion or object.
for classes  - a mixin is a class containing methods that can be used by other classes without a need to inherit from it.
mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.
*/

var mixin = function() {  // mixin method to be added
        console.log("Hi , I'm Mixin");
}
    
// var mixin = {  //for fucntions and classes
//     fly : function() {
//     console.log("Hi , I'm Mixin");
//     }
// };

var obj = { 
  a: 1
}

function test() { // if we add mixin in prototype of test we can access it as text.mixin()
    var a = 10;
}

function mixinAdd(obj1) {
    obj1.mixin = mixin; // to add to objects and function(like static)
    // Object.assign(obj1.prototype, mixin) //to add/copyies to classes and fuctions prototype , also make sure that mixin is an object type as prototye is object
}

console.log(obj) 
mixinAdd(obj)
console.log(obj)

// console.log(test) 
// mixinAdd(test)
// console.log(test.prototype)
// test.mixin()
