/*
session storage - stays alive till the window is open.
local storage - always remains.

to avoid conflict between sites to access the storage they follow "same origin policy" 
protocol host and port.

the data is stored in the form of key-value pair
localstorage object is stored on the window object of the browser.
*/
localStorage.clear()
sessionStorage.clear() // has same functions as that of local storage.
console.log("localStorage", localStorage);
console.log("sessionStorage", sessionStorage);

//methods : setItem() getItem() clear() removeItem() 

localStorage.setItem("a", "abc")
localStorage.setItem("b", "abc");
localStorage.setItem("a", "abcd"); //same key override the privious value


sessionStorage.setItem("a", "abc");

console.log(localStorage.getItem("a"))

localStorage.removeItem("a")

localStorage.setItem("a", { "a": "afadf" }); // will set value as [object Object]
localStorage.setItem("a", JSON.stringify({ "z": "afadf" }));

