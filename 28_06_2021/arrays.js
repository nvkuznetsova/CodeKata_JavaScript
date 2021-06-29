// 1. reverse the array

var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2. reverse with another solution



// 3. reverse with another solution



// 4. create users placeholders from an array of numbers

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var expected = {
	user_1: {
		firstName: null,
		lastName: null,
	},
	user_3: {
		firstName: null,
		lastName: null,
	},
	user_5: {
		firstName: null,
		lastName: null,
	},
	user_7: {
		firstName: null,
		lastName: null,
	},
	user_9: {
		firstName: null,
		lastName: null,
	},
};

// 5. the array of names should be represented in the alphabetical descending order

var names = ['Richard', 'Charles', 'Paul', 'Jason', 'Zachary', 'Noah', 'Louis', 'Bobby'];
var namesAlphabeticalDesc = ['Zachary', 'Richard', 'Paul', 'Noah', 'Louis', 'Jason', 'Charles', 'Bobby'];

// 6. write own map

// 7. write own filter

// 8. write own reduce

// -------------------------------------------------------------- //

function stringify(arr) {
	return JSON.stringify(arr);
}

function isTaskSolved(expected, result) {
	console.log(stringify(expected) === stringify(result));
}