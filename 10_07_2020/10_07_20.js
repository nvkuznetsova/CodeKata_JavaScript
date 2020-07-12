/*
  1. Help police and create a function that takes a string which contains letters, numbers, symbols.
     Return value is a string in the lower case.
     The message should have propper spacing for better readability.
     We know that each word starts with letter in the capital case.
*/

// const messageToDeCode = '&^(847$(^&(3H8-9785459&()&)70e&^(@4323532%$@%#5l_)(_8(&8^5$#^543487(69p:|:|:[M!#@!14!21e:"::"}{{}{}P3#*(9*8-l*)(&6%447%(*-e*77854%^&)89a<?.,.:{;]587657s674345&*(*8%5465e%$#&$56757678:};;I%#7*8(90}}W@%#65$%589a(*6^%@.;s!254347678)(8()7&99*0K67$43%49&8)(i9&3#2$6&90d$3237&90*96#$@n(&^4!@7&(87)_9(00a&*(&%$%#@5$879809*p&^%$#45^#57$685*75&p&6$342!%3$%^7(0e87%54#@^&()7*d&^%$@34@657908)(8^&*^3$%2^$%^$6(&8)';

// function deCode(message) {
//   const regExp = /[a-z]/gi;
//   const regExpCap = /[A-Z]/g;
//   const workMessage = message.match(regExp);
//   for (let [index, character] of workMessage.entries()) {
//     if (character.match(regExpCap) && index !== 0) {
//       workMessage[index ] = ' ' + workMessage[index];
//     }
//   }
//   return workMessage.join('').toLowerCase();
// }

// console.log(deCode(messageToDeCode));

/*
  2. Create a function that will calculate the length of a podcast depends on a play speed.
     Function will take two arguments: total length 'hh:mm:ss' and play speed 0.5 - 3.0.
     Return value is a string 'hh:mm:ss'.
*/

// function calculatePodcastLength(initialLength, speed) {
//   const toSeconds = (initial) => {
//     let seconds = 0;
//     const time = initial.split(':');
//     seconds += parseInt(time[0]) * 3600;
//     seconds += parseInt(time[1]) * 60;
//     seconds += parseInt(time[2]);
//     return seconds;
//   };
//   const toInitial = (seconds) => {
//     const initial = [];
//     initial.push(Math.trunc(seconds / 3600));
//     let workSeconds = seconds;
//     workSeconds = seconds % 3600; 
//     initial.push(Math.trunc(workSeconds / 60));
//     workSeconds = workSeconds % 60;
//     initial.push(Math.trunc(workSeconds));
//     const result = initial.map(element => {
//       if (element.toString().length === 1) {
//         return '0' + element.toString();
//       }
//       return element.toString();
//     });
//     return result.join(':');
//   }
//   const seconds = toSeconds(initialLength);
//   const secondsAfterSpeedChange = seconds / speed;
//   return toInitial(secondsAfterSpeedChange);
// }

// console.log(calculatePodcastLength("00:00:55", 2)) // "00:00:27"
// console.log(calculatePodcastLength("01:20:00", 1.5)) // "00:53:20"

/*
  4. Create a function that will take an array.
     Return value is an object with method 'next'.
     Calling this method will return an object in a format:
     {
       value: next value from an array,
       done: boolean
     }.
     For example:
     const ourArray = ['first', 'second', 'third'];
     const nextObj = getNextObject(ourArray);
     console.log(nextObj.next()) // { value: 'first', done: false }
     console.log(nextObj.next()) // { value: 'second', done: false }
     console.log(nextObj.next()) // { value: 'third', done: false }
     console.log(nextObj.next()) // { value: undefined, done: true }
*/

// const ourArray = ['first', 'second', 'third'];

// function getNextObject(arr) {
//   return {
//     collection: [...arr],
//     currentIndex: 0,
//     next() {
//       const toReturn = {
//         value: this.collection[0],
//         done: !!this.collection[0] || false,
//       };
//       this.collection.shift();
//       return toReturn;
//       ANOTHER SOLUTION
//       // if (this.currentIndex < this.collection.length) {
//       //   const nextRes = {
//       //     value: this.collection[this.currentIndex],
//       //     done: false,
//       //   };
//       //   this.currentIndex += 1;
//       //   return nextRes;
//       // } else {
//       //   return {
//       //     value: this.collection[this.currentIndex],
//       //     done: true,
//       //   }
//       // }
//     }
//   }
// }

// const nextObj = getNextObject(ourArray);
// console.log(nextObj.next()) // { value: 'first', done: false }
// console.log(nextObj.next()) // { value: 'second', done: false }
// console.log(nextObj.next()) // { value: 'third', done: false }
// console.log(nextObj.next()) // { value: undefined, done: true }

/*
  3. Create a function that will generate a random password.
     Function will take two arguments: the length of a password
     and the parameters of a password in a format:
     {
       letters: boolean,
       numbers: boolean,
       symbols: boolean,
     }.
     Return value is a string.
*/

function generatePassword(passwordLength, parameters) {
  
}

const parameters1 = {
  letter: true,
  numbers: true,
  symbols: false,
};

console.log(generatePassword(10, parameters1));

const parameters2 = {
  letter: false,
  numbers: false,
  symbols: true,
};

console.log(generatePassword(20, parameters2));