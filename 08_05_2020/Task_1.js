/*
Задание 1
Перепишем функцию с коллбэков на промис:

pending
resolved
rejected
*/

const studentLeft = false;
const studentWatchingCatMemes = false;

function participateinCodingGym() {
  return new Promise((resolve, reject) => {
    if (studentLeft) {
      reject({
        name: 'Student left',
        message: ':(',
      });
    } else if (studentWatchingCatMemes) {
      reject({
        name: 'Student watching cat memes:',
        message: 'coding < cats',
      });
    } else {
      resolve('Good job! Thank you for being here!');
    }
  });
}

participateinCodingGym()
  .then((message) => {
    console.log('Success: ' + message);
  })
  .catch((error) => {
    console.log(error.name + ' ' + error.message);
  });
