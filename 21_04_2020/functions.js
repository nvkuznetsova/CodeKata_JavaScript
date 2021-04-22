// Context

// 1. ----------------------

// var arr = ["a", "b"];
// arr.push(function() {
//   console.log( this );
// });

// arr[2]();

// 2. -----------------------

// var a = 'a';

// const func = () => {
//   const deeper = () => {
//       const moreDeeper = () => {
//           console.log(this.a);
//       };

//       moreDeeper();
//   };

//   deeper();
// };

// func();

// 3. -----------------------

// var user = {
//   firstName: "Василий",
//   export: this,
// };

// console.log( user.export.firstName );

// 4. -----------------------

// var name = "";

// var user = {
//   name: "Василий",
//   export: function() {
//     return this;
//   } 
// };

// console.log( user.export().name );


// 1. Write function declaration - sum of 2 intergers.

// console.log(sum(2,3))
// {
//   function sum(a, b) {
//     return a + b;
//   }
// }

// console.log(sum(2,3))

// 2. Write function expression - subtraction of 2 integers.

// console.log(subtraction(3, 2))

// const subtraction = function(a, b) {
//   return a - b;
// }

// console.log(subtraction(3, 2))

// 3. Write named function expression - sum with recursion.

// const sum = function sumOfTwo(...args) {
//   if (args.length <= 0) {
//     return 0;
//   }
//   const [first, ...rest] = args;
//   return first + sumOfTwo(...rest);
// };

// 4. Write immediately invoked function expression.

// var number = 1;
// var result;

// (function() {
//   var number = 3;
//   result = number;
// })()

// console.log(result)

// 5. Write function with new Function.

// const args = 'a, b';
// const bodyFunc = 'return a + b';

// const func = new Function(args, bodyFunc)

// console.log(func(2, 3));

// const funcFirst = new Function('a, b', 'return a + b');

// console.log(funcFirst(2, 3))

// const funcSecond = new Function('a', 'b', 'return a + b');

// console.log(funcSecond(2, 3))

// 6. Write bind function.

// const bind = (context, func, ...firstArgs) => {
//   return (...secondArgs) => {
//     return func.apply(context, [...firstArgs, ...secondArgs]);
//   }
// }

// const greenDay = {
//   action: 'Wake',
//   sing(whom, month) {
//     console.log(`${this.action} ${whom} up when ${month} ends`);
//   }
// }

// // greenDay.sing('me', 'september');

// const perioAlex = {
//   action: 'Call',
// }

// const binded = bind(perioAlex, greenDay.sing, 'me');
// binded();

// 7. Write sum function which gets any quantity of arguments with iteration. 

// const sumIteration = (...args) => {
//   const iter = (argsIter, acc) => {
//     if (argsIter.length <= 0) {
//       return acc;
//     }
//     const [first, ...rest] = argsIter;
//     const newAcc = acc + first;
//     return iter(rest, newAcc);
//   }
//   return iter(args, 0);
// };



// console.log(sumIteration(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12));
