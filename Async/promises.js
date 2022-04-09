/*
Promises are used where we don't know how much time it will take to execute a particular code like fetcing from API.
A promise may have one of three states.
Pending
Fulfilled
Rejected


promise can have .then()  .catch() and .finally()
.then() can take 2 params one for resolve and one for reject
*/
var count = 0
let promisePractice = new Promise((resolve, reject) => {
    if (count == 0) {
        resolve(console.log("I m resolve"));
    } else {
        reject(console.log("I m reject"))
    }
})

console.log(promisePractice) // promise defination
promisePractice.then(() => { // .then by default returns a promise.
    console.log("I am the 1st then")
    return "abc" // returned value will be passed to next then, and "then" returns a promise so this value will be passed as "Promise.resolve('abc')".
}).then((val) => {
    console.log(val) // will print abc
    console.log("I am the 2nd then");
}).catch(() => { // will run if initally the count is not 0.
    console.log("catch : count changed from 0")
}).finally(() => {
    console.log("finally I m done.") // will execute what ever happens
})