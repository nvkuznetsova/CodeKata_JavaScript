// 1. reverse the array

// var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var result = arr.slice().reverse();
// var result = [...arr].reverse();

// isTaskSolved(expected, result);

// console.log(arr);

// 2. reverse with another solution

// var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var result = [];

// for (let i = arr.length - 1; i >= 0; i -= 1) {
// 	result.push(arr[i]);
// 	// result.push(arr.pop());
// }

// isTaskSolved(expected, result);

// 3. reverse with another solution

// var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var result = arr.reduce((acc, value) => [value, ...acc], []);

// isTaskSolved(expected, result);

// for (const num of arr) {

// }

// 4. create users placeholders from an array of numbers

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var expected = {
// 	user_1: {
// 		firstName: null,
// 		lastName: null,
// 	},
// 	user_3: {
// 		firstName: null,
// 		lastName: null,
// 	},
// 	user_5: {
// 		firstName: null,
// 		lastName: null,
// 	},
// 	user_7: {
// 		firstName: null,
// 		lastName: null,
// 	},
// 	user_9: {
// 		firstName: null,
// 		lastName: null,
// 	},
// };

// var result = {};
// arr.forEach((item) => {
// 	if (item % 2 === 1) {
// 		result[`user_${item}`] = {
// 			firstName: null,
// 			lastName: null,
// 		};
// 	}
// });

// isTaskSolved(expected, result);


// 5. the array of names should be represented in the alphabetical descending order (ascending)

// var names = ['Richard', 'Charles', 'Paul', 'Jason', 'Zachary', 'Noah', 'Louis', 'Bobby'];
// var namesAlphabeticalDesc = ['Zachary', 'Richard', 'Paul', 'Noah', 'Louis', 'Jason', 'Charles', 'Bobby'];

// var result = names.sort((a, b) => {
// 	if (a > b) {
// 		return -1;
// 	}

// 	if (a < b) {
// 		return 1;
// 	}

// 	return 0;
// });

// isTaskSolved(namesAlphabeticalDesc, result);

// 6. write own Array.prototype.map

// var arr = [1, 2, 3, 4, 5];
// var addHello = (item) => item + 'hello';

// function ownMap(arr, callback) {
// 	let result = [];

// 	for (const item of arr) {
// 		result.push(callback(item));
// 	}

// 	return result;
// }

// console.log(ownMap(arr, addHello));

// 8. write own reduce
var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

var reducer = (acc, value) => [value, ...acc];

function ownReduce(arr, reducer, initialAcc) {
	// if (initialAcc === undefined) {
	// 	initialAcc = 0;
	// }
	var result = initialAcc;

	for (let i = 0; i < arr.length; i += 1) {
		result = reducer(result, arr[i]);
	}

	return result;
}

console.log(ownReduce(arr, reducer, []));

// -------------------------------------------------------------- //

function stringify(arr) {
	return JSON.stringify(arr);
}

function isTaskSolved(expected, result) {
	console.log(stringify(expected) === stringify(result));
}