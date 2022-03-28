var num1 = 10;
var num2 = 5;

if (window.Worker) {
    var sharedWorker = new SharedWorker('Shared_Worker.js');
    sharedWorker.port.postMessage([num1, num2])
    sharedWorker.port.onmessage = function (e) {
        console.log('Parent 2 - mul of num1 and num 2:' , e.data)
    }
} else {
    console.log('Web Worker Support not Found');
}