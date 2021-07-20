// CONSOLE LOG

// 1

// Promise
//     .resolve('a')
//     .then((x) => {console.log(x); return 'b'})
//     .then((x) => {console.log(x); return 'c'})
//     .then((x) => console.log(x));

// 2

// Promise
//     .resolve()
//     .then(function log1() { console.log(1); })
//     .then(function log2() { console.log(2); })
//     .then(function log3() { console.log(3); });

// Promise
//     .resolve()
//     .then(() => console.log(4))
//     .then(() => console.log(5))
//     .then(() => console.log(6));

// 3

// Promise
//     .resolve()
//     .then(function log1() {console.log(1); })
//     .then(
//         function log2() {
//             return new Promise((res) => {
//                 setTimeout(() => {
//                     console.log(2)
//                     res();
//                 }, 0)
//             })
//     });

//     Promise
//         .resolve()
//         .then(function log3() { console.log(3); });

// 4

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 0);

// console.log(3);

// Promise.resolve().then(() => {
//     console.log(4);
// })

// console.log(5);

// while('') {
//     console.log(6);
// }

// console.log(7);

// 5

// setTimeout(function timeout() {
//     console.log('Timeout');
// }, 0);

// let p = new Promise(function(resolve, reject) {
//     console.log('Promise created!');
//     resolve();
// });

// p.then(function(){
//     console.log('Promise resolved!');
// });

// console.log('Script end');

// 6

// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
//     // resolve(2);
//     // setTimeout(() => resolve(2), 1000);
// });

// promise.then(console.log);

// 7

// Write a wrap around setTimeout

// function delay(ms) {
//     return new Promise((res) => {
//         setTimeout(res, ms);
//     })
//     // your code
// }

// delay(3000).then(() => console.log('completed after 3 seconds'));

// 8

// Rewrite using promises

// const printSec = (number) => {
//     return new Promise((res) => {
//         setTimeout(() => {
//             console.log(`${number} sec`);
//             res();
//         },
//         1000)
//     })
// }

// printSec(1)
//     .then(() => printSec(2))
//     .then(() => printSec(3))
//     .then(() => printSec(4));
    // .then(() => printSec(3));

// printSec(1, () => {
//     printSec(2, () => {
//         printSec(3, () => {})
//     })
// })

// 9

// Create a function that will generate random numbers from 1 to 10.
// Pass the generated number to setTimeout as ms.
// Wrap it in promise.
// Let the promise be resolved successfully if the generated number is between 1 and 5. 
// Throw an error if the number is from 6 to 10.

// 10

// Write a custom Promise.race

// function customPromiseRace(promises) {
//     return new Promise((res, rej) => {
//         promises.forEach(function(promise) {
//             Promise.resolve(promise).then((str) => {
//                 res(str);
//             }, rej);
//         });
//     });
// }

// let slowPromise = new Promise(function resolveSlow(r) { return setTimeout( function logSlow() { return r('slow'), 2000})});
// let quickPromise = new Promise(r => setTimeout(() => r('quick'), 1000));
// let slowPromise = new Promise(r => setTimeout(() => r('slow'), 2000));
// let newPromise = new Promise(r => setTimeout(() => r('new'), 3000));

//   customPromiseRace([slowPromise, quickPromise, newPromise]).then(a => console.log('customPromiseRace', a));
  
//   Promise.race([slowPromise, quickPromise]).then(a => console.log('Promise.race', a));
  
  