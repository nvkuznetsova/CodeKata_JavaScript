// Descending Order
// Your task is to make a function that can take any non-negative integer as a argument
// and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

function descending(int) {
  return +int.toString().split('').sort((a, b) => b - a).join('')
}

console.log(descending(1454))


// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  return alphabet.split('').every(char => text.includes(char))
}

// console.log(isPangram("The quick brown"))

// Function iteration (cw)
// The purpose of this kata is to write a higher-order function returning a new function 
// that iterates on a specified function a given number of times. 
// This new function takes in an argument as a seed to start the computation from.
// For instance, consider the function getDouble. When run twice on value 3, yields 12 as shown below.
// getDouble(3) => 6
// getDouble(6) => 12
// Let us name the new function createIterator and we should be able to obtain the same result using createIterator as shown below:
// var doubleIterator = iterator(getDouble, 2); // This means, it runs *getDouble* twice
// doubleIterator(3) => 12

const getDouble = (x) => {
  return x + x;
}

function iterator(clb, n) {
  return function(x) {
    while(n) {
      x = clb(x);
      n--;    
    }
    return x;
  }
}

// const sumIterator = iterator(getDouble, 2);
// console.log(sumIterator(4))

// функция мемоизации

const getSum = (a ,b) => {
	return a + b
}

function memo(clb) {
  const cache = new Map();
  return function(...args) {
    if (cache.has(args.toString())) {
      console.log('cached')
    } else {
      console.log('calculated')
      cache.set(args.toString(), clb.apply(this, args))
    } 
    return cache.get(args.toString())
  }
}

// const memoSum = memo(getSum);
// console.log(memoSum(10,5))
// console.log(memoSum(10,5))

// Написать функцию, которая генерирует случайную последовательность длиной N,
// которая состоит из символов: a-z, A-Z, 0-9

function randomizer(n) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let res = '';
  for (let i = 0; i < n; i++) {
    res += alphabet[Math.floor(Math.random() * (alphabet.length + 1))];
  }
  return res;
}
