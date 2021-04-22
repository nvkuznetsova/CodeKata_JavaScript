// // function expression
// const function1 = function () {};
// const function2 = () => {};

// // named function expression
// const funcion3 = function itself() {
//   itself();
// };

// // function declaration
// function f() {}

// // IIFE
// (function f() {})()
// !function f() {}()
// +function f() {}()

// (()=>{})();

// Определить, является ли текст панаграмой

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function isPanagram(text) {
  for (let i = 0; i < alphabet.length; i++) {
    if (!text.toLowerCase().includes(alphabet[i])) {
      return false;
    }
  }
  return true;

  // Second solution
  // const lowered = text.toLowerCase();
  // return alphabet.split("").every(char => lowered.includes(char));
}

// console.log(isPanagram('Sphinx of black quartz, judge my vow'));

// Написать функцию, которая принимает на вход число n
// и заполняет массив всеми числами до n, включая n,
// но не включая 0, и возвращает этот массив

function fill(n) {
  return new Array(n).fill(0).map((el , i) => i + 1);
}

// console.log(fill(10))

// Extending JavaScript Objects: Contains Method

String.prototype.contains = function (subStr, isCaseSens) {
  return new RegExp(subStr, isCaseSens ? '' : 'i').test(this);

  // Second solution
  // if(isCaseSens) {
  //   return this.indexOf(subStr) === -1 ? false : true;
  // }

  // return this.toLowerCase().indexOf(subStr.toLowerCase()) === -1 ? false : true;
}

// console.log('Hello world!'.contains('lO w', true));

// // Reverse the number ( -123 => -321)

function reverseNumber(num) {
  const isNegative = num < 0;
  return Math.abs(num).toString().split('').reverse().join('') * (isNegative ? -1 : 1);
  

  // Second solution
  // const isNegative = num < 0;
  // const a = new String(num).split('').reverse();

  // if(isNegative) {
  //   a.pop();
  //   a.unshift('-');
  // }

  // return a.join('');
}

// console.log(reverseNumber(-123));


// // Get sum of numbers between 'a' and 'b'

function range(a, b) {
  const arr = a > b ? [b, a] : [a, b];
  const limit = arr[1];

  const increment = (summ, currentNum) => {
    summ += currentNum;
    if (currentNum === limit) {
      return summ;
    }
    return increment(summ, currentNum + 1);
  };

  const result = increment(0, arr[0]);

  // Second Solution
  // let sum = 0;
  // for (let i = arr[0]; i <= arr[1]; i++) {
  //   sum += i;
  // }

  return result;
}

// console.log(range(1, -2));

// // reverse string

String.prototype.reverse = function() {
  return this.split('').map((_, index, arr) => {
    return arr[arr.length - (1 + index)];
  }).join('');
}

// console.log('Hello World!'.reverse());

