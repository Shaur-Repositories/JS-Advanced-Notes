var num1 = 10;
var num2 = 20;
if (window.Worker) {
    var dedicatedWoker = new Worker("Dedtcated_Worker.js");
    dedicatedWoker.postMessage([num1, num2])
    dedicatedWoker.onmessage = function (e) {
        console.log("from parent :", e.data);
    }
   
} else {
    console.log("Your JS Engine don't support web workers.");
}
//  dedicatedWoker.terminate();