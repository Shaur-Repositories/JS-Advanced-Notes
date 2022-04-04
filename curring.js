function mul(a, b) {
    console.log(a * b);
}

// normal function
mul(2, 3)

//curring using bind
let a = mul.bind(this,2)
a(3)

//curring using Closure
let secMul = function (a) {
    return function (b) {
        console.log(a * b);
    }
}
let b = secMul(2)
b(3)

console.log(new Set([1, 1, 1]))
Math.floor(4.6)
