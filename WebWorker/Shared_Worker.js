onconnect = function (e) { // used in shared workers to get the port from parent
    var port = e.ports[0];
    port.onmessage = function (e) {
        port.postMessage(e.data[0]*e.data[1])
    }
}

//shared parents should follow the "same origin policy"