/*

Errors in js

Error Name          Description

EvalError           An error in the eval() function has occurred.

RangeError          Out of range number value has occurred.

ReferenceError      An illegal reference has occurred.

SyntaxError         A syntax error within code inside the eval() function has occurred.
                    All other syntax errors are not caught by try/catch/finally, and will
                    trigger the default browser error message associated with the error. 
                    To catch actual syntax errors, you may use the onerror event.

TypeError           An error in the expected variable type has occurred.

URIError            An error when encoding or decoding the URI has occurred 
                   (ie: when calling encodeURI()).

Runtime errors are usually a category of exception that encompasses a variety of more specific error types such as logic errors , 
IO errors , encoding errors , undefined object errors , division by zero errors , and many more




The difference between 'throw new Error' and 'throw someObject' in javascript is that throw new Error wraps the error passed to it in the following format −
{ name: 'Error', message: 'String you pass in the constructor' }
The throw someObject will throw the object as is and will not allow any further code execution from the try block, ie same as throw new Error.

*/

/*
let a = add(5, 10)
console.log(10) //Uncaught ReferenceError: add is not defined 
*/

//simple try catch
try {  // code which can have error , if no catch the code will be terminated and the error will be uncaught
    let a = add(5, 10);
    console.log(a);
} catch (e) { // e the error object if any are passed and the catch block is executed.
    console.log(e.name , e.message) // e.name : Refernce Error , e.message : add is not defined
    console.log("Na its OK")
}
finally { // this block executes for sure...after try/catch
    console.log("its the final block.")
}

//try-catch with timed functions(settimeout and setInterval)
try {
    
    // setTimeout(() => {
    //     let a = add(5, 10); // this code will still give error coz..timed function has already left the  try-catch block. 
    //     // to fix it we should put try-catch block inside the callback function of setTimeout
    //     console.log(a);
    // },0)

} catch(e) {
    console.log("Na its OK")
} finally {
     console.log("its the final block.")
}

//try-catch inside settimeout
// setTimeout(() => {
//     try {  // this try-catch handles the error as they are in the setTimeout.
//         let a = add(5, 10);
//         console.log(a);
        
//     } catch {
//         console.log("Hi I'm an Error") //  will be printed at the last.
//     }
// })

/*
Throw are used to pass user define exceptions.
*/

try {
    console.log("A")
    // throw "ABC"
    throw new Error("name1") // new Error part can be assigned to a variable and that variable can be thrown.
    console.log("C");
} catch(e) { //e is optional
    console.log(e)
    console.log("This is a throw Test")
    // throw "new Error" // if an error is thrown in catch block it will go to the program.
    
}

//Error is a constructor Function.
// WE can also extend Error class creates error
class newError extends Error {
  constructor(value) {
    super(`"${value}" is not a valid number`);
    this.name = "InvalidNumber"; //default name is Error
  }
}

try {
    throw new newError("a")
} catch(e) {
    console.log(e)
}




