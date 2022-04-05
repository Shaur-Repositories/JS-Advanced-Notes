/*
async await further helps us to write code in more syncronous way
async function always returns promise(.then()) along with  the data.
*/

function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("function A says hello in 2 sec")
        },2000)
    })
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("function B says hello in 3 sec")
    }, 3000);
  });
}

function c() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("abc")
    }, 3000);
  });
}


async function asyn() {
    // sequence executon
    // let a1 = await a();
    // console.log(a1);
    // let b1 = await b();
    // console.log(b1);

    // concurrent execution
    // let a1 = a();
    // let b1 = b();
    // console.log(await a1);
    // console.log(await b1);

    //parallel execution - same as promise.all()



    try {
        let a1 = await a()
        let b1 = await b()
        // let c1 = await c() // having reject block will go to catch as soon as it's encounter.
        console.log(a1)
        console.log(b1)
        // console.log(c1)
    }
    catch(e) {
        console.log("Hey, I'm a catch block")
        console.log(e)
    }
    finally {
        console.log("Final Block will happen at last.")
    }
}

asyn()

