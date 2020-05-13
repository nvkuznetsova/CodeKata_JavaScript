/*
Задание 9
Без выполнения кода скажите, что будет выведено в консоли?
*/

const promise = new Promise((resolve, reject) => {
  resolve(5);
});

promise
  .then((result) => console.log(result + 20)) // 25
  .catch((error) => console.log(error));

promise
  .then((result) => console.log(result + 10)) // 15
  .catch((error) => console.log(error));
