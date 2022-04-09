onmessage = function (e) {
    postMessage(e.data[0]+e.data[1])
}
// able to use onmessage and postMessage directly in wroker coz it has its own global object like window 