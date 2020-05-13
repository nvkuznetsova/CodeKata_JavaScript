function test() {
  debugger;
  return Promise.reject(5)
    .then(() => console.log('1'))
    .catch(() => console.log('2'))
    .then(() => console.log('3'))
    .catch(() => console.log('4'))
    .finally(() => console.log('5'));
}

test();

// var a = 5;

// setTimeout(function timeout() {
//   console.log('setTimeout', a);
//   a = 10;
// }, 0);

// var p = new Promise(function (resolve, reject) {
//   console.log('promise', a);
//   a = 25;
//   resolve();
// });

// p.then(function () {
//   console.log('then');
//   console.log(a);
// });

// console.log('main', a);
