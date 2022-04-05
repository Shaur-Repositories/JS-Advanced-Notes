/*
setTimeout - > return an id to clearTime out
setInterval - > return an id to clearInterval
*/

//setTimeout
console.log("------------setTimeout---------------")

function abc(a, b, c) {
    console.log(a,b,c)
}

let id = setTimeout(abc, 3000, "a", "b", "c") // function name , time , arguments for the funciton
console.log(id) // clearTimeout(id) to clear the time out
clearTimeout(id);

setTimeout(abc(1, 2, 3), 3000); // arguments can be passed to functions directly also

console.log("------------setInterval---------------");
let id2 = setInterval(abc, 3000, "a1", "b1", "c1") // function name , time , arguments for the funciton
console.log(id2)
clearInterval(id2)


console.log("------------setTimeout Interval Effect---------------");

setTimeout(function run() {
    console.log("hello");
    setTimeout(run, 5000)
}, 5000); // will work as setInterval