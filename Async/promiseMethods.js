/* 
promise methods such as .all , .race , race , .any , allSetteled
*/


// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("function A says hello in 2 sec");
    }, 1000);
  });
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("function B says hello in 3 sec");
    }, 3000);
  });
}

function c() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("abc");
    }, 1500);
  });
}


// to do something after all promises are resolved successfully.
// .all ...if any one of the promise fails it will give stop exectuing and gives and error...output is in same order as input
Promise.all([a(), b()]).then((values) => {
  console.log(values);
});

// // to do something after all promises are settled --- resolved or rejected.
Promise.allSettled([a(), b() , c()]).then((values) => {
  console.log(values);
});
// 0: {status: 'fulfilled', value: 'function A says hello in 2 sec'}
// 1: {status: 'fulfilled', value: 'function B says hello in 3 sec'}
// 2: {status: 'rejected', reason: 'abc'}


// return first promise , doest matter if its rejected or resolved.
Promise.race([a(), b(), c()]).then((values) => {
  console.log(values);
});


// return first resolved promise , but if all rejects then reject promise is rejected.
Promise.any([a(), b(), c()]).then((values) => {
  console.log(values);
});