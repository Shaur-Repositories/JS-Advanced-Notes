onconnect = function (e) {
    var port = e.ports[0];
    port.onmessage = function (e) {
        port.postMessage(e.data[0]*e.data[1])
    }
}