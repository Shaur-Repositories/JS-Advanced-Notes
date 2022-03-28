var num1 = 10;
var num2 = 10;

if (window.Worker) {
    var sharedWorker = new SharedWorker("Shared_Worker.js");
    sharedWorker.port.postMessage([num1, num1]);
    sharedWorker.port.onmessage = function (e) {
      console.log("Parent 1 - square of num 1 :", e.data);
    };
    // terminate function not supported in shared workers.;
} else {
  console.log("Web Worker Support not Found");
}
