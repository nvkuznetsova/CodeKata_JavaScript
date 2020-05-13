/* 
Задание 2
Напишем промис, который складывает 1 со случайным числом из функции getRandomInt и проверяет, получилось у нас 2 или же нет. Если получилось - выводим сообщение 'Success', если же нет - 'Failed'.

1. Код, результат выполнения которого мы проверяем - в нашем случае, сумма (1 + getRandomInt())
2. Что делать, если мы получили результат 2 (успех)
3. Что делать, если мы получили результат не 2 (неудача)
*/

function getRandomInt() {
  min = Math.ceil(2);
  max = Math.floor(1);
  return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
}

const promise = new Promise((resolve, reject) => {
  const calculated = 1 + getRandomInt();
  console.log(calculated);

  if (calculated === 2) {
    resolve('Успех!');
  } else {
    reject('Неудача!');
  }
});

promise.then((message) => console.log(message));
promise.catch((message) => console.log(message));
