// /* 1. Write an 'encrypt' function. All digit-like chars should be replaced with digits
//  	  l = 1, a = 4, s = 5, b = 6, g = 9, o = 0 */

// var toEncrypt = 'Hello, my name is Bob Google';
// var encrypted = encrypt(toEncrypt);
// var expected = 'He110, my n4me i5 B06 G0091e';

// console.log('Is solved: ', encrypted === expected);

// /* your code below this line */

// // all before let ecrypt is temporary dead zone
// // let encrypt = function (str) { // function expression
// function encrypt(str) { // function declaration
// 	let encrypted = '';
// 	[...str].forEach(item => {
// 		let char;
// 		switch (item) {
// 			case 'l':
// 				char = 1;
// 				break;
// 			case 'a':
// 				char = 4;
// 				break;
// 			case 's':
// 				char = 5;
// 				break;
// 			case 'b':
// 				char = 6;
// 				break;
// 			case 'g':
// 				char = 9;
// 				break;
// 			case 'o':
// 				char = 0;
// 				break;
// 			default:
// 				char = item;
// 		};

// 		encrypted += char;
// 	});

// 	return encrypted;
// }

/* 2. Write a function 'parse'. It should parse an object-like string and return a function */
// new Function('parameter1', 'parameter2', 'some', 'a', 'return');
// var toParse = `{
// 	"firstParameter": "number1",
// 	"secondParameter": "number2",
// 	"action": "*"
// }`;

// function parse(value) {
// 	const { firstParameter, secondParameter, action } = JSON.parse(value);

// 	// function add(num1, num2) {
// 	// 	return num1 + num2;
// 	// };
// 	// new Function('num1', 'num2', 'num3', 'num4', 'const something = 4; return num1 + num2 + num3 + num4');

// 	// return new Function('number1', 'number2', `return number1+number2`);
// 	return new Function(firstParameter, secondParameter, `return ${firstParameter}${action}${secondParameter}`);
// }

// var parsedFunction = parse(toParse);
// var result = parsedFunction(2, 5);
// var expected = 10;

// console.log('Is solved: ', result === expected);

/* 3. Write a function that will return another function.
This another function should console a pseudo-array Arguments of the outer function */

function outer() {
	// let args = arguments;

	// function declaration() {} // stand-alone
	// return function () { // unnamed function expression
	// return function inner() { // named function expression
	// 	// unknownVar;
	// 	console.log(args);
	// }

	// return function inner() {
	// 	console.log(arguments);
	// };

	return () => {
		console.log(arguments);
	};
}

var consoleArgs = outer(1,2,3,4,5);
consoleArgs();