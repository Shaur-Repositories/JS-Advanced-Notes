let name = {
    a: "a",
    b: "b"
}

function abc(c,d,e) {
    console.log(this.a, this.b, c, d, e);
}


Function.prototype.newBind = function (...args) {
    let obj=this
    return function (...args1) {
        obj.call(...args, ...args1);
    }
}


let func = abc.newBind()
func(name,"4","c","d")
