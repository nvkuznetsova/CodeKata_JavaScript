/*
Задание 3
Воспользуемся одним из методов Promise, чтобы одновременно вывести в консоль все 3 resolve сообщения.
*/

const CodingGym1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Coding Gym students have gathered');
  }, 2000);
});

const CodingGym2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Coding Gym  teachers have not gathered');
  }, 1000);
});

const CodingGym3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Coding Gym recording has not started');
  }, 3000);
});

Promise.all([CodingGym1, CodingGym2, CodingGym3]).then((messages) =>
  console.log(messages)
);
