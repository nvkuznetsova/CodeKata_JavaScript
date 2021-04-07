/* ---------------- Arrays ---------------- */

// 1. Найти первое не последовательное число.

// const myArray = [45, 46, 47, 48, 49, 50, 51, 62, 63, 64, 65, 66];
// const myArray2 = [4, 10];

// expected result = 62;

// function firstNonConsecutive(arr) {
//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i - 1] !== arr[i] - 1) {
//       return arr[i];
//     }
//   }
// }

// console.log(firstNonConsecutive(myArray));
// console.log(firstNonConsecutive(myArray2));

// 2. Сократите имена и отчества.

// const people = [
//   'Павлов Чарльз Романович',
//   'Борисов Семён Вадимович',
//   'Колесник Жерар Леонидович',
//   'Савин Зиновий Григорьевич',
//   'Тарасюк Ждан Виталиевич',
//   'Чумак Захар Григорьевич',
//   'Осипов Елисей Борисович',
// ];

// expected result = [
//   'Павлов Ч.Р.',
//   'Борисов С.В.',
//   'Колесник Ж.Л.',
//   'Савин З.Г.',
//   'Тарасюк Ж.В.',
//   'Чумак З.Г.',
//   'Осипов Е.Б.',
// ];

// function shortenFullName(arr) {
//   const workArr = arr.map(fullName => fullName.split(' '));
//   workArr.forEach((fullName, index) => {
//     fullName[0] = fullName[0] + ' ';
//     fullName[1] = fullName[1][0] + '.';
//     fullName[2] = fullName[2][0] + '.';
//     workArr[index] = fullName.join('');
//   });

//   return workArr;
// }

// console.log(shortenFullName(people));

// 3. Посчитать количество отрицательных и положительных чисел.

// const integers = [-4, -2, 4, 1, 67, -43, 82, -9, -2, 23, -4];
// const integers2 = [];
// expected result = {
//   positive: 5,
//   negative: 6,
//   zeros: 0,
// }

// function count(arr) {
//   return arr.reduce((acc, element) => {
//     if (element > 0) {
//       acc['positive'] = acc['positive'] + 1;
//       return acc;
//     } else if (element < 0) {
//       acc['negative'] = acc['negative'] + 1;
//       return acc;

//     } else {
//       acc['zeros'] = acc['zeros'] + 1;
//       return acc;
//     }
//   }, {
//     positive: 0,
//     negative: 0,
//     zeros: 0,
//   })
// }

// console.log(count(integers));
// console.log(count(integers2));

// 4. Даны клички членов группировки Шашлычники. Отсортируйте их в порядке возрастания по второму слову в кличке.

// const squadAliaces = [
//   'Козырной Тузак',
//   'Козырной тузак',
//   'Шальной Мангал',
//   'Жоский Кабан',
//   'Скользкий Шампур',
//   'Кривой Стрелец',
//   'Козырной Тузик',
//   'Малой Пивас',
//   'Высокий Дятел',
//   'Подстреленный Ковбой',
// ];

// expected result = [
//   'Высокий Дятел',
//   'Жоский Кабан',
//   'Подстреленный Ковбой',
//   'Шальной Мангал',
//   'Малой Пивас',
//   'Кривой Стрелец',
//   'Козырной Туз',
//   'Скользкий Шампур',
// ]

// function sortSquad(squadAliaces) {
//   const workArr = [...squadAliaces];
//   return workArr.sort((a, b) => {
//     const firstWord = a.split(' ')[1];
//     const secondWord = b.split(' ')[1];
//     return firstWord.localeCompare(secondWord);
//   })
// }

// console.log(sortSquad(squadAliaces));

// 5. Найдите сумму минимальных значений из каждого массива.

// const arrayOfArray = [
//   [11, 2, 32, 14, 95],
//   [35, 26, 57, 18, 39],
//   [20, 21, 34, 56, 100],
//   [34, 55, 29, 1],
// ];

// expected result = 41;

// function sumOfMins(arr) {
//   const workArr = [...arr];
//   return workArr.reduce((acc, element) => {
//     return acc += Math.min(...element);
//   }, 0);
// }

// console.log(sumOfMins(arrayOfArray));

// console.log(Math.min(3, 5, 6, 8, 1));

// 6. Функция возвращает элемент массива, если его значение и индекс совпадают. Если таких нет - возвращает -1.

// const myArray = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
// const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// expected result = 6;

// function indexEqualsValue(arr) {
//   return index = arr.findIndex((element, index) => index === element);
// }

// function indexEqualsValue(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === i) {
//       return arr[i];
//     }
//   }
//   return -1;
// }

// console.log(indexEqualsValue(myArray));
// console.log(indexEqualsValue(myArray2));