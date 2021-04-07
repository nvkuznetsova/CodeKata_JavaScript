// /**  Задача 1:
//  * Дан массив:
//  * @var { [1, '2', '3px', {a: 4}, 5, '', null, false, true] }
//  * @return {array} вернуть отфильтрованный только по числам входный массив,
//  * в котором каждое число будет умножено на 2
//  */

// const array = [1, '2', '3px', { a: 4 }, 5, '', null, false, true];

// function filter(arr) {
//   return arr.reduce((acc, el) => {
//     if (isNumber(el)) {
//       acc.push(el * 2);
//     }
//     return acc;
//   }, []);
//   // return arr.filter((el) => isNumber(el)).map((el) => el * 2);
// }

// function isNumber(variable) {
//   return typeof variable === 'number';
// }

// console.log(filter(array));

// /** Задача 2:
//  * Дан массив:
//  * @var { [1, 4, 2, 7, 8, 12, 3, 2, 7, 8] }
//  * @return {number} вернуть максимальный элемент массива чисел (Math.max)
//  */

// const array = [1, 4, 2, 7, 8, 12, 3, 2, 7, 8];

// function max(arr) {
//   return arr.reduce((acc, element) => {
//     if (element > acc) {
//       acc = element;
//     }
//     return acc;
//   }, arr[0]);
// }

// console.log(max(array));

// /**  Задача 3:
//  * Даны два массива:
//  * @var { [1, 2, 3, 2, 0] }
//  * @var { [5, 1, 2, 7, 3, 2] }
//  * @return {array} вернуть массив-пересечение двух входных массивов ([1, 2, 2, 3], порядок неважен)
//  */

// const arr1 = [1, 2, 3, 2, 0];
// const arr2 = [5, 1, 2, 7, 3, 2];

// const createObject = (arr) => {
//   const obj = {};

//   for (let el of arr) {
//     if (obj[el]) {
//       obj[el]++;
//     } else {
//       obj[el] = 1;
//     }
//   }
//   return obj;
// };

// function intersection(arr1, arr2) {
//   const obj1 = createObject(arr1);
//   const obj2 = createObject(arr2);

//   const result = [];
//   for (let key in obj1) {
//     if (obj2[key]) {
//       const count = Math.min(obj1[key], obj2[key]);
//       for (let i = 0; i < count; i++) {
//         result.push(key);
//       }
//     }
//   }

//   return result;
// }

// console.log(intersection(arr1, arr2));

// /** Задача 4:
//  * Дан массив:
//  * @var { [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] }
//  * @return {string} "(123) 456-7890"
//  * The returned format must be correct in order to complete this challenge
//  * Don't forget the space after the closing parentheses!
// */

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// function createNumber(arr) {
//   arr.unshift('(');
//   arr.splice(4, 0, ') ');
//   arr.splice(8, 0, '-');
//   return arr.join('')
// }

// console.log(createNumber(array));

// /** Задача 5:
//  * @var { [1, 4, 2, 7, 8, 12, 3, 2, 7, 8] }
//  * @return {array} вернуть исходный массив, в котором сначала идут все нечетные числа, потом четные
//  */

// const array = [1, 4, 2, 7, 8, 12, 3, 2, 7, 8];

// function evenNotEven(arr) {
//   return arr.sort(compare);
// }

// function compare(a, b) {
//   if (a % 2 === 1 && b % 2 === 0) return -1;
//   if (a % 2 === 0 && b % 2 === 1) return 1;
//   return 0;
// }

// function evenNotEven2(arr) {
//   const result = [];
//   for (let el of arr) {
//     if (el % 2 === 0) {
//       result.push(el);
//     } else {
//       result.unshift(el);
//     }
//   }
//   return result;
// }

// console.log(evenNotEven(array));
// console.log(evenNotEven2(array));

// /** Задача 6: *
//  * @var { [‘one’, ‘two’, ‘three’] }
//  * @return {object} вернуть структуру данных,
//  * которая реализует группировку исходного массива по ключу
//  */

// const array = ['one', 'two', 'three'];

// function groupBy(arr, key) {
//   return arr.reduce((acc, el) => {
//     const keyValue = el[key];
//     acc[keyValue] ? acc[keyValue].push(el) : acc[keyValue] = [el]
//     return acc;
//   }, {});
// }

// console.log(groupBy(array, 'length'));
