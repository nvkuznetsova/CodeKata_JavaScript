/*
Задание 6
Напишем функцию, которая принимает количество миллисекунд и возвращает промис, который разрешится через указанное число миллисекунд.
*/

const delay = (ms) => {
  // setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

delay(3000).then(() => console.log('runs after 3 seconds'));

/*
Что происходит "под капотом" промиса:
{
  status:resolved,
  value: undefined,
  onResolveReactions: [callback],
}

см. раздел "Промисы в деталях" по этой ссылке: https://learn.javascript.ru/promise
*/
