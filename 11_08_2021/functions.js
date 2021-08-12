// PURE OR NOT

// 1

// const getRandomInt = () => Math.random();


// 2

// const square = (num) => Math.pow(num, 2);


// 3

// function getSquare(items) {
//     var len = items.length;
//     for (var i = 0; i < len; i++) {
//       items[i] = items[i] * items[i];
//     }
//     return items;
// }
   
// const items = [1, 2, 3];
// console.log(getSquare(items));
// console.log(getSquare(items));
// console.log(getSquare(items));
      
            
// 4
            
// const square = (num) => num*num;

// const surfaceAreaCalculator = (radius) => {
//     return 4 * 3.14 * square(radius);
// }


// 5

// const getCurrentDate1 = () => new Date(Date.now());
// const getDate = (date) => new Date(date);
// const getCurrentDate2 = getDate(Date.now());


// 6

// const getAge1 = (yearOfBirth) => new Date().getFullYear() - yearOfBirth;

// const year = new Date().getFullYear();
// const getAge2 = (yearOfBirth, currentYear) => currentYear - yearOfBirth;


// 7

// const getUserName = () => process.env.USERNAME;


// 8

// const user = { name: 'Ivan', position: 'Student' };

// const changePosition = (obj) => {
//      obj.position = position;
//     return obj;
// };

// console.log(changePosition(user, 'Developer'));
// console.log(user);


// 9

// const user = { name: 'Ivan', position: 'Student' };

// const writeObjectToJson = (obj) => {
//     return JSON.stringify(obj);
// };

// console.log(writeObjectToJson(user));

// user.position = 'Developer';

// console.log(writeObjectToJson(user));


// 10

// const user = { name: 'Ivan', position: 'Student' };

// const changePosition = (obj, key, value) => {
//     return { ...obj, [key]: value };
// };

// console.log(changePosition(user, 'position', 'Developer'));


// 11

// const generateID = () => Math.floor(Math.random() * 10000);

// const createUser = (id, name, age) => ({
//   id: generateID(),
//   name,
//   age
// });


// 12

// const logger = msg => {
//     console.log(msg);
// };

// logger("Yo");


// 13

// const src = 'https://jsonplaceholder.typicode.com/todos/1';

// const readJson = async (source) => await(await fetch(source)).json();
  
// console.log(readJson(src));


// 14

// const counter = (a) => a === 1 ? 1 : a + counter(a - 1);

// console.log(counter(5));
// console.log(counter(5));
// console.log(counter(5));
// console.log(counter(5));


// DIFFERENCE

// let a = 0;

// const f1 = () => {
//     a = a + 1;
//     return true;
// }

// const f2 = () => {
//     a = a + 1;
//     return a;
// }

// console.log(f1());
// console.log(f2());




// REWRITE

// function logElements(arr) {
//     while (arr.length > 0) {
//       console.log(arr.shift());
//     }
// }
  
// function main() {
//     const arr = ['banana', 'orange', 'apple'];
  
//     console.log('Before sorting:');
//     logElements(arr);
  
//     arr.sort();
  
//     console.log('After sorting:');
//     logElements(arr);
// }
  
// main();


// CURRY

// const sum = (a, b) => a + b;
// const curry = (a) => (b) => a + b;

// console.log(sum(2, 3));
// console.log(curry(2)(3));

// const infiniteCurry = (fn) => {
//     const next = (...args) => {
//         return (x) => {
//             console.log(x);
//             if (!x) {
//                 return args.reduce((acc, a) => {
//                     return fn.call(null, acc, a);
//                 }, 0);
//             }

//             return next(...args, x);
//         };
//     };

//     return next();
// };

// console.log(infiniteCurry(sum)(2)(3)(5)());

