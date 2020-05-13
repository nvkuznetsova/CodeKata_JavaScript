/*
Задание 8
Без выполнения кода скажите, что будет выведено в консоли?
*/

Promise.reject(5)
  .then(() => console.log('1'))
  .catch(() => console.log('2')) // 2
  .then(() => console.log('3')) // 3
  .catch(() => console.log('4'))
  .finally(() => console.log('5')); // 5
