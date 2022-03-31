/*
Generators : It's a way of accessing functions as itrators. i.e. we can pause the execution of a function and resume it from where we left.
*/
console.log("---------------Generator function Basics-------------")

function* genertorFun() { // * denotes its a generator; can also be denoted as function *generateFun(){}
    var a = 1;
    console.log("1 yield");
    yield a;
    console.log("2 yield");
    yield 100;
    console.log("3 yield");
    yield "3rd yield"
}

var genRes = genertorFun() //genetrator function returns an object
// console.log(genRes);

//genRes has next() method, just like itrators and every time we call it a yield result is given 

console.log(genRes.next()) //returns {value: 1, done: false} + executes any fucntion defination part above its yield.
console.log(genRes.next());//{value: 100, done: false} 
console.log(genRes.next()); //value: '3rd yield', done: false}
console.log(genRes.next());//{value: undefined, done: true}

console.log("---------------Generators passing value through next-------------");
function* genPassval() {
    let x = yield "enter x :";
    console.log(x);
    if (x === 'a') yield "yes"
    else yield "no"
}

var testgen = genPassval()
var val = "a"
console.log(testgen.next()) //  first yeild to get the "enter x :"
console.log(testgen.next(val)); // val passed to x , this yield return val will depend on the value passed in the above next

console.log("---------------Generators other methods than next-------------");

//retun and throw
function* retThrowfun() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
    yield 5;
    yield 6;
}

var testgen = retThrowfun()

// return inside the genrator
// console.log(testgen.next()); // {value: 1 ; done :false}
// console.log(testgen.next()); // {value: 2 ; done :false}
// console.log(testgen.next()); // {value: 3 ; done :false}
// console.log(testgen.next()); // {value: 4 ; done :true} 
// // as soon as returned is encountered in fun ; the fun is terminated and done is set to true.
// // yield statements below return will give {value: undefined ; done :true} as return has terminated the functin,
// console.log(testgen.next()); // {value: undefined ; done :true}
// console.log(testgen.next()); // {value: undefined ; done :true}


//commeting above code to test the throw() from outside below.

console.log("-------------")
// return from outside the genrator
console.log(testgen.next()); // {value: 1 ; done :false}
console.log(testgen.return(123)); // {value: 123 ; done :done}  
// testgen.return(val) sets the returned obj value to val and done to true and terimates the fun.
// yield statements below return will give {value: undefined ; done :true} as return has terminated the functin,
console.log(testgen.next()); // {value: undefined ; done :true}
console.log(testgen.next()); // {value: undefined ; done :true}


//throw inside the function
function* retThrowfun1() {
  yield 1;
  yield 2;
  yield 3;
  throw 4;
  yield 5;
  yield 6;
}
var testgen = retThrowfun1();
console.log("-------------");
// console.log(testgen.next()); // {value: 1 ; done :false}
// console.log(testgen.next()); // {value: 1 ; done :false}
// console.log(testgen.next()); // {value: 2 ; done :false}
// console.log(testgen.next()); // {value: 3 ; done :false}
// console.log(testgen.next()); // uncaught error : will terminate the function

//commeting above code to test the throw() from outside below.
console.log("-------------");


console.log("-------------");
//throw() from generation
console.log(testgen.next()); // {value: 1 ; done :false}
console.log(testgen.throw()); // uncaught error

