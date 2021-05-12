// // what order of the numbers we will see
// // what order of the numbers we will see if we click the button

// const button = document.querySelector('.button');

// button.addEventListener('click', () => {
//   setTimeout(() => { console.log(1.1) }, 0);
//   queueMicrotask(() => console.log(1.2));
//   console.log(1.3);
// });

// button.addEventListener('click', () => {
//   setTimeout(() => { console.log(2.1) }, 0);
//   queueMicrotask(() => console.log(2.2));
//   console.log(2.3);
// });

// button.click();
// console.log('oooops');


// browser click

// callstack   - 
// micro tasks - 
// macro task  - 

// 1.3 1.2 2.3 2.2 1.1 2.1

// callstack   - 9 15 
// micro tasks - 8 14
// macro task  - 7 13

// 1.3 2.3 1.1 2.1 2.1 2.2

// js click

// callstack   - 
// micro tasks - 
// macro task  - 

// oops 1.3 1.2 2.3 2.2 1.1 2.1

// callstack   - 
// micro tasks - 
// macro task  - 

// 1.3 2.3 opps 1.2 2.2 1.1 2.1
