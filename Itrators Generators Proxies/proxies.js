/*
proxies in js is a way to wrap an object/ function and add a custom behaviour to it like reading, insertion or vaidation.
Proxy act as a middleware between objects and operations happening on it.
handler.get() --- for objects  --- The get() is fired when a property of the target object is accessed via the proxy object.
handler.set() --- for objects ----  The set() controls behavior when a property of the target object is set.
handler.apply() --- for functions  is for a function call.
*/

console.log("-----------Proxies Examples----------------");

var testObj = {
    key1: 1,
    key2: 2,
}
console.log("-----------Proxies Get Handler Examples----------------");



//get funciton as handler
var getfun = {
   get:function(obj, key , val){ //works like this or get(){} 
        obj[key] ? console.log("true") : console.log("false");  // checks if key is present of not
        obj[key] = val; // will act as set
    }
}

var proxy1 = new Proxy(testObj, getfun) // syntax for creating proxies  new Proxy(target obj/function , handler)
// var proxy1 = new Proxy(testObj, {});// if handler part is left empty the proxy will work as the handler(i.e. object) itself
proxy1.key1
// proxy1.key3 = 10; //get_set testing code.
// console.log(testObj)// key3=10 will be added

console.log("-----------Proxies Set Handler Examples----------------");
//set function as handler
var setfun = {
    set : function (obj, key, val) { // can also be used as set()
        obj[key] = val;
        console.log(obj)
    }
}
var proxy1 = new Proxy(testObj, setfun);
proxy1.abc = 134;

console.log("-----------Proxies Apply Handler Examples----------------");

//apply handler function is used in fuction.

var obj = {
    param1: "abc",
    param2: "xyz"
}
function test(anObj) {
    return `${anObj.param1} ${anObj.param2}`
}

var handler = {
    apply(fun, thisArg, param) { //thisArg is a part of syntax , fun is the "target function" and params is the "array of args pass in that function".
        console.log(fun(...param).toUpperCase()) // just make the returned value to uppercase.
    }
};

var funProxy = new Proxy(test, handler);
funProxy(obj)