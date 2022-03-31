/*
itrators : js provides  prototcol on how data structure are being itrated over using for...of loop,
This protocol has 2 parts :

* itrables : Datastructure that have symbol.itrator() method on them.
                eg : Array.prototype[@@iterator]()
                     TypedArray.prototype[@@iterator]()
                     String.prototype[@@iterator]()
                     Map.prototype[@@iterator]()
                     Set.prototype[@@iterator]()

* itrator : object returend by the symbol.itrator() method.
*/

// Test Data
var arr = [1, 2, 3]
var arrItr = arr[Symbol.iterator]() // to initiaze an itrator
console.log(arrItr) //Array Itrator

// to itrate over arr we can use for..of loop

for (let i of arrItr) {  // same as let i of arr 
    console.log(i)
} 
//commenting above code coz, arrItr.next() will give value: undefined and done: true as its already itrated.


// to itrate over arr we can next() of Itrator
console.log(arrItr.next())
// .next() returns an object with sturcutre like {value: 1, done: false}, next() is called arr.len+1 times and the last run will give {value: undefiend, done: true}
