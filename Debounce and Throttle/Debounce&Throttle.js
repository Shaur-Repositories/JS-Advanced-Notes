console.log("hello shaur");
//Debounce & Throttle
let inputDebounce = document.getElementById("inputDebounce");
let inputThrottle = document.getElementById("inputThrottle");

function networkCall() {
    console.log("Network Call  => Data : ", inputDebounce.value);
}
const Delay = 500;

//Debounce
function gudDebounce(fun, delay) {
    let timerId;
    return () =>  {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            fun()
        },delay)
    }
}
let debounce = gudDebounce(networkCall, Delay)


//Throttle
function gudThrottle(fun, delay) {
    let flag = true;
    return () => {
        if (flag === true) {
            fun();
            flag = false;
            setTimeout(() => {
                flag = true;
            },delay)
        }
    }
}
let throttle = gudThrottle(networkCall , Delay)


//Debounce Better
function DebounceBetter(fun,delay) {
    let timer;
    return function () {
        if (!timer) {
            fun()
        }
        clearTimeout(timer)
        timer = setTimeout(() => {
            timer = undefined;
        }, delay)
    }
}
let debounce1 = DebounceBetter(networkCall, Delay);


inputDebounce.addEventListener("keyup", debounce1);
inputThrottle.addEventListener("keyup", throttle);