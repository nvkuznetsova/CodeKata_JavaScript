// /**  Задача 1:
//  * Дан массив:
//  * @var { [1, '2', '3px', {a: 4}, 5, '', null, false, true] }
//  * @return {array} вернуть отфильтрованный только по числам входный массив, в
//  *  котором каждое число будет умножено на 2
//  */

// const arr = [1, '2', '3px', { a: 4 }, 5, '', null, false, true];

// function arrFilter(arr) {
//   return arr.filter((el) => typeof el === 'number').map((e) => e * 2);
// }

// function arrFilterReduce(arr) {
//   return arr.reduce((acc, el) => {
//     if (typeof el === 'number') {
//       acc.push(el * 2);
//     }
//     return acc;
//   }, []);
// }

// console.log(arrFilterReduce(arr));

// /** Задача 2:
//  * Дан массив:
//  * @var { [1, 4, 2, 7, 8, 12, 3, 2, 7, 8] }
//  * @return {number} вернуть максимальный элемент массива чисел (Math.max)
//  */

//  const arr = [1, 4, 2, 7, 8, 12, 3, 2, 7, 8];
// function max(arr) {
//   return arr.reduce((acc, el) => {
//     if (el > acc) {
//       return el;
//     } else {
//       return acc;
//     }
//   }, -Infinity);
// }

// console.log(max(arr))

// /**  Задача 3:
//  * Даны два массива:
//  * @var { [1, 2, 3, 2, 0] }
//  * @var { [5, 1, 2, 7, 3, 2] }
//  * @return {array} вернуть массив-пересечение двух входных массивов ([1, 2, 2, 3],
//  * порядок неважен)
//  */

// const arr1 = [1, 2, 3, 2, 0];
// const arr2 = [5, 1, 2, 7, 3, 3, 2];

// function intersection(arr1, arr2) {
//   const obj1 = createObject(arr1);
//   const obj2 = createObject(arr2);
//   console.log(obj1);
//   console.log(obj2);

//   const result = [];

//   for (let key in obj1) {
//     if (obj2[key]) {
//       const count = obj1[key] > obj2[key] ? obj2[key] : obj1[key];
//       for (let i = 0; i < count; i++) {
//         result.push(key);
//       }
//     }
//   }

//   return result;
// }

// function createObject(arr) {
//   return arr.reduce((acc, el) => {
//     acc[el] = acc[el] ? ++acc[el] : 1;
//     return acc;
//   }, {});
// }

// console.log(intersection(arr1, arr2));

// /** Задача 4:
//  * Дан массив:
//  * @var { [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] }
//  * @return {string} "(123) 456-7890"
//  * The returned format must be correct in order to complete this challenge
//  * Don't forget the space after the closing parentheses!
//  */

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// function createNumber(arr) {
//   // arr.unshift('(');
//   // arr.splice(4, 0, ') ');
//   // arr.splice(8, 0, '-');
//   // return arr.join('');

//   const result = `(${arr.slice(0,3).join}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
//   return result;
// }

// console.log(createNumber(arr));

// /** Задача 5:
//  * @var { [1, 4, 2, 7, 8, 12, 3, 2, 7, 8] }
//  * @return {array} вернуть исходный массив,
//  * в котором сначала идут все нечетные числа, потом четные
//  */

// const arr = [1, 4, 2, 7, 8, 12, 3, 2, 7, 8];
// function evenNotEven(arr) {
//   return arr.sort((a, b) => {
//     if (a % 2 === 1 && b % 2 === 0) return -1;
//     if (a % 2 === 0 && b % 2 === 1) return 1;
//     return 0;
//   });
// }
// console.log(evenNotEven(arr));

// /** Задача 6: *
//  * @var { [‘one’, ‘two’, ‘three’] }
//  * @return {object} вернуть структуру данных,
//  *  которая реализует группировку исходного массива по длине строки
//  */
// // [['one', 'two'], ['three']]
// // {
// //   3: ['one', 'two']
// //   5: ['three']
// // }

// const arr = [
//   {
//     name: 'Vasya',
//     age: 28,
//   },
//   {
//     name: 'Vasya',
//     age: 15,
//   },
//   {
//     name: 'Nastya',
//     age: 28,
//   },
// ];

// function groupBy(arr, key) {
//   const a = [...arr];
//   return a.reduce((acc, el) => {
//     acc[el[key]] = acc[el[key]] ? [...acc[el[key]], el] : [el];
//     return acc;
//   }, {});
// }

// console.log(groupBy(arr, 'age'));
