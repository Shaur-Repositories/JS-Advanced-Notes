/*

Errors in js

syntax Error
Runtime Error
Refrence Error
Eval Error
Internal Error
Range Error

Runtime errors are usually a category of exception that encompasses a variety of more specific error types such as logic errors , 
IO errors , encoding errors , undefined object errors , division by zero errors , and many more

*/

/*
let a = add(5, 10)
console.log(10) //Uncaught ReferenceError: add is not defined 

*/

//simple try catch
try {  // code which can have error
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
    throw new Error("name1" , "message1" , "stack1") // new Error part can be assigned to a variable and that variable can be thrown.
    console.log("C");
} catch(e) { //e is optional
    console.log(e)
    console.log("This is a throw Test")
    // throw "new Error" // if an error is thrown in catch block it will go to the program.
    
}

//Error is a cnonstructor Function.
// WE can also extend Error class creates error
class newError extends Error{
    constructor(val) {
          super(`"${val}" is not a valid number`); // message
          this.name = "InvalidNumber"; // default "Error"
    }
}

try {
    throw new newError(a)
} catch(e) {
    console.log(e)
}


