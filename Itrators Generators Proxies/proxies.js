/*
proxies in js is a way to wrap an object/ function and add a custum behaviour to it like reading, insertion or vaidation
*/

console.log("-----------Proxies Examples----------------");

var testObj = {
    key1: 1,
    key2: 2,
}
console.log("-----------Proxies Get Handler Examples----------------");
//get funciton as handler
var getfun = {
    get: function(obj, key , val){
        obj[key] ? console.log("true") : console.log("false");
        // obj[key] = val; // will act as set
    }
}

var proxy1 = new Proxy(testObj, getfun) // syntax for creating proxies  new Proxy(target obj/function , handler)
// var proxy1 = new Proxy(testObj, {});// if handler part is left empty the proxy will work as the handler itself
proxy1.key1
// proxy1.key3 = 10; //get_set testing code.

console.log("-----------Proxies Set Handler Examples----------------");
//set function as handler
var setfun = {
    set: function (obj, key, val) {
        obj[key] = val;
        console.log(obj)
    }
}

var proxy1 = new Proxy(testObj, setfun);
proxy1.abc = 134;