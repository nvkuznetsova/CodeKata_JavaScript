// // what order of the numbers we will see

// console.log(1);

// setTimeout(() => {
//   console.log(2)
// })

// const p = new Promise((res, rej) => {
//   res();
// });

// p.then(() => console.log(3))

// console.log(4);

// 1 4 3 2 

// callstack   - 3 15
// micro tasks - 13
// macro task  - 5

// 1 4 2 3 





















////////////////////////////////////////////////

// console.log(1);

// setTimeout(() => {
//   console.log(2)
// })

// const p = new Promise((res, rej) => {
//   setTimeout(() => {
//     res();
//   });
// });

// p.then(() => console.log(3))

// console.log(4);


// callstack   - 47 61 
// micro tasks - 59
// macro task  - 49 54

// 1 4 3 2

// callstack   - 
// micro tasks -
// macro task  -

// 1 4 2 3


















////////////////////////////////////////////////////

// console.log(1);

// setTimeout(() => {
//   console.log(2)
//   const p = new Promise((res, rej) => {
//       res();
//   });
//   p.then(() => console.log(3))
//   console.log(4)
// });

// setTimeout(() => {
//   console.log(5)
// });

// console.log(6);

// callstack   - 95 110
// micro tasks - 102
// macro task  - 98 103 107

// 1 6 2 4 3 5  // 1 6 2 4 5 3

