// 1
// Difference

// Your goal is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
//     let res = [];
//     a.forEach(el => {
//         if (!b.includes(el)) {
//             res.push(el);
//         }
//     });
//     return res;
// }

// function arrayDiff(a, b) {
//     return a.filter(el => !b.includes(el));
// }

// console.log(arrayDiff([], [4,5])); // []
// console.log(arrayDiff([3,4], [3])); // [4]
// console.log(arrayDiff([1,8,2], [])); // [1,8,2]
// console.log(arrayDiff([1,2,3], [1,2])); // [3]


// 2
// Mexican Wave

// Your task is to create a function that turns a string into a Mexican Wave. 
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

//  1.  The input string will always be lower case but maybe empty.
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Example:
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// function wave(str) {
//     let res = [];
//     let arr = str.split('');
//     for (let i = 0; i < str.length; i++) {
//         if (arr[i] !== ' ') {
//             arr[i] = arr[i].toUpperCase();
//             res.push(arr.join(''));
//         }
//     }
//     return res;
// }

// function wave(str) {
//     let res = [];
//     let arr = str.split('');
//     arr.forEach((el, i) => {
//         if (el !== ' ') {
//             res.push(`${str.slice(0, i)}${el.toUpperCase()}${str.slice(i + 1)}`);
//         }
//     })
//     return res;
// }

// console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// console.log(wave("two words")); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
// console.log(wave(" gap ")); // [" Gap ", " gAp ", " gaP "]


// 3
// Multiplication Table

// Your task is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// function multiplicationTable(n) {
//     let outerArray = [];
//     for (let i = 1; i <= n; i++) {
//         let innerArray = [];
//         for (let j = 1; j <= n; j++) {
//             innerArray.push(j*i);
//         }
//         outerArray.push(innerArray);
//     }
//     return outerArray;
//     // let arr = Array(n).fill(0);
// }
  
// function multiplicationTable(n) {
//     let res = [];
//     for (let i = 1; i <= n; i++) {
//         // res.push(Array.from({length: n}, (v, k) => (k+1)*i));
//         res.push(Array(n).fill(0).map((el, index) => (index + 1) * i));

//     }
//     return res;
// }

// console.log(multiplicationTable(3)); // [[1,2,3], [2,4,6], [3,6,9]]
// console.log(multiplicationTable(5)); 


// 4
// Odd Sort

// You will be given an array of numbers. 
// You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(array) {
//     let odd = array.filter(el => el % 2).sort((a, b) => a - b);
//     return array.map(el => el % 2 ? odd.shift() : el);
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
// console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]
// console.log(sortArray([])); // []


// 5

// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// NOTE: The idea is not sort the elements from the lowest value to the highest;
// the idea is to traverse the 2-d array in a clockwise snailshell pattern.
// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]]

// function snail(array) {
//     let res = [];
//     res.push(...array.shift());
//     for (let i = 0; i < array.length; i++) {
//         res.push(array[i].pop());
//     }
//     res.push(...(array.pop() || []).reverse());
//     for (let i = array.length; i > 0; i--) {
//         res.push(array[i-1].shift());
//     }
//     if (array.length) {
//         res.push(...snail(array));
//     }
//     return res;
// }

// console.log(snail([[]])); // []
// console.log(snail([[1]])); // [1]
// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])); // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]


































