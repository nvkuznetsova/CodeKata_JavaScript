// 1. Create function that will get a string and will return a number of vowels in the string.

// var str = 'AAA Wake me up when September ends'; // 9
// var obj = {
// 	'a': '',
// 	'e': '',
// 	'i': '',
// 	'u': '',
// 	'o': '',
// 	'y': '',
// };

// function findVowels(str) {
// 	const vowels = ['a', 'e', 'i', 'u', 'o', 'y'];
// 	let counter = 0;
// 	const chars = str.toLowerCase().split('');

// 	for (let i = 0; i < chars.length; i += 1) {
// 		if (chars[i] in obj) {
// 			counter += 1;
// 		}
// 	}

// 	return counter;
// }

// console.log(findVowels(str));

// 2. Create function that will get a number and will return a summ of all numbers down till 0.
// Solve it using recursion.

// var num = 6; // 6 + 5 + 4 + 3 + 2 + 1 = 21

// function getSum(num) {
// 	if (num === 1) {
// 		return 1;
// 	}

// 	return num + getSum(num - 1);
// }

// console.log(getSum(3));

// getSum(3) getSum(2) getSum(1)

// 3. Create function that will generate an array (length is 80) of random numbers (from 1 to 50) and will return an array of numbers
// which wasn't generated

// [3, 3, 2, 2, 3] [1]

// const maxNum = 50;
// const numQuantity = 80;

// function createArr(numQuantity, maxNum) {
// 	return [...Array(numQuantity)].map(() => Math.ceil(Math.random() * maxNum));
// }

// function getUngeneratedDigits() {
// 	let set = new Set(createArr(numQuantity, maxNum));
// 	let arr = Array.from(set).sort((a, b) => a - b);

// 	console.log(arr.toString())
// 	return Array(50).fill(null).map((_, index) => index + 1).filter(digit => !arr.includes(digit));
// }

// console.log(getUngeneratedDigits());


// 4. Create function that will get an object and will return object but with protected properties which we couldn't change.

// var person = {
// 	name: 'Bob',
// 	age: 22,
// 	profession: 'JS programmer',
// };

// function protect(obj) {
// 	return Object.freeze(obj);
// }

// function protect(obj) {
// 	for (let prop in obj) {
// 		Object.defineProperty(obj, prop, {
// 			writable: false,
// 		});
// 	}
// }

// protect(person);

// person.name = 'Aleksandr';
// person.surname = 'Dow';

// console.log(person.name); // Bob
// console.log(person.surname);

// 5. Create analog of Array.filter

// function ourFilter(arr, func) {
// 	let filtered = [];

// 	for (let i = 0; i < arr.length; i += 1) {
// 		if (func(arr[i])) {
// 			filtered.push(arr[i]);
// 		}
// 	}

// 	return filtered;
// }

// var arr = [1, 2, 3, 4, 5];
// function filter(num) {
// 	return num < 3;
// }

// console.log(ourFilter(arr, filter));

// 6. Create analog of Array.bind

// var person = {
// 	name: 'Bob',
// 	age: 22,
// 	profession: 'JS programmer',
// };

// function sayName(a, b, c, d) {
// 	console.log(this.name);
// 	console.log(a)
// 	console.log(b)
// 	console.log(c)
// 	console.log(d)
// }

// function ourBind(context, func, ...args) {
// 	return function bound(...anotherArgs) {
// 		return func.apply(context, [...args, ...anotherArgs]);
// 	}
// }

// var bounded = ourBind(person, sayName, 1, 2);

// bounded(3, 4);

// 7. Create analog of Array.reduce
