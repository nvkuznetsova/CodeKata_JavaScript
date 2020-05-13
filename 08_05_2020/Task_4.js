/*
Задание 3
Воспользуемся одним из методов Promise, чтобы выводить в консоль resolve сообщение только того промиса, который разрешится быстрее всех.
*/

const CodingGym1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Coding Gym students have gathered');
  }, 2000);
});

const CodingGym2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Coding Gym  teachers have gathered');
  }, 4000);
});

const CodingGym3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Coding Gym recording has started');
  }, 3000);
});

Promise.race([CodingGym1, CodingGym2, CodingGym3])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log('error');
  });
