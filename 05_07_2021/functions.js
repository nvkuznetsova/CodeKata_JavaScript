/* 1. Write an 'encrypt' function. All digit-like chars should be replaced with digits
 	  l = 1, a = 4, s = 5, b = 6, g = 9, o = 0 */

var toEncrypt = 'Hello, my name is Bob Google';
var encrypted = encrypt(toEncrypt);
var expected = 'He110, my n4me i5 B06 G0091e';

console.log('Is solved: ', encrypted === expected);

/* your code below this line */



/* 2. Write a function 'parse'. It should parse an object-like string and return a function */

var toParse = `{
	firstParameter: 'number1',
	secondParameter: 'number2',
	action: '+'
}`;



var parsedFunction = parse(toParse);
var result = parsedFunction(2, 5);
var expected = 7;

console.log('Is solved: ', result === expected);

/* 3. Write a function that will return another function. This another function should console a pseudo-array Arguments of the outer function */



/* 4. Write a function 'Rock Paper Scissors' with AI :D Function accepts names of two players then starts generating rounds. Each round should be
	  consoled. In the end console the name of the winner */

RockPaperScissors('Bob', 'Jack');
// Console output:
// Bob: paper vs paper: Jack
// Draw!
// Bob: rock vs rock: Jack
// Draw
// Bob: rock vs paper: Jack
// Jack wins!