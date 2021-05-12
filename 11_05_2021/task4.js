// // what order of the numbers we will see

// console.log(1);

// const p = new Promise((res, rej) => {
//   res();
// });

// p.then(() => console.log(2));

// console.log(3);


// 1 3 2












////////////////////////////////////////////

// console.log(1)

// const p = new Promise((res, rej) => {
//   res();
// })

// p.then(() => {
//   throw new Error;
// })
// .then(() => {
//   console.log(3)
// })
// .catch(() => {
//   console.log(4)
// })
// .then(() => {
//   console.log(5)
// })
// .finally(() => {
//   console.log(6)
// });

// console.log(7);

// 1 7 2 3 5 6 
// 1 7 4 6 
// 1 7 4 5 6









////////////////////////////////////////////

// console.log(1)

// const p = new Promise((res, rej) => {
//   res();
// })

// p.then(() => {
//   throw new Error;
// })
// .then(() => {
//   console.log(3)
// })
// .catch(() => {
//   console.log(4)
// })
// .then(() => {
//   console.log(5)
// })
// .finally(() => {
//   console.log(6)
// });

// console.log(7);








////////////////////////////////////////////////////////////////////////////

// console.log(1);

// const p = new Promise((res, rej) => {
//   console.log(2);
//   res('result');
//   res('another result');
//   rej('nope');
//   console.log('ooops');
//   // throw new Error;
// });

// // p.then(val => console.log(val));
// p.then(val => console.log(val))
// .catch(err => console.log(err.message));

// console.log(5);

// // 1 2 oops 5 result result 
