/*

for..of loops : cant be used with objects , is used to itrate over elements of array set string (not index)
for..in loops : used to itrate over keys of objects or index of of arr / string.
*/

console.log("for..of..in")

let arr = [1, 2, 3, 4, 5]
let str = "12345"
let obj = {
  "1": "A",
  "2": "B",
  "3": "C",
};

for (let i in arr) {
    console.log("arr" , i) //index
}

for (let i in str) {
  console.log("str", i); //index
}

for (let i in obj) {
  console.log("obj", i); //keys
}

for (let i of arr) {
  console.log("arr", i); //element
}

for (let i of str) {
  console.log("str", i); //element
}
for (let i of obj) { 
  console.log("obj", i); //Error
}