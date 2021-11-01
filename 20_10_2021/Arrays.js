// Task 1
// Given an array of objects of wizards, find all Gryffindor wizards
// And return they names

// const list1 = [
//     { name: 'Harry Potter', 
//       faculty: 'Gryffindor' 
//     },
//     { name: 'Drako Malfoy', 
//       faculty: 'Slytherin' 
//     },
//     { name: 'Ron Weasley', 
//       faculty: 'Gryffindor' 
//     },
//     { name: 'Hermione Granger', 
//       faculty: 'Gryffindor'
//     },
//     { name: 'Cedric Diggory', 
//       faculty: 'Hufflepuff'
//     }
//   ];

//   function wizards(list1) {
//  return list1.reduce((arr, item) => {
//     if(item.faculty === 'Gryffindor') {
//         arr.push(item.name)
//     }
//     return arr;
// }, [])
// }


// Task 2
// Find the stray number
// given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// Example: [1, 1, 2] ==> 2: [17, 17, 3, 17, 17, 17, 17] ==> 3 

//function stray(arr) {
    // let res = 0;
    // for(let i = 0; i < arr.length; i++) {
    //     for(let j = i + 1; j < arr.length; j++ ) {
    //         if (arr[i] !== arr[j]) {
    //             res = arr[j]
    //         }
    //     }
    // }
    // return res
//}

// function stray(arr) {
// let setArr = Array.from(new Set(arr));
// let res = arr.filter(item => item === setArr[0]);
// return res.length > 1? setArr[1] : setArr[0]
// }

// console.log(stray([1, 1, 2]));

// function stray(arr) {
//     let obj = {};
//     let element;
// arr.forEach(item => {
//     if(item in obj) {
//         obj[item] += 1
//     } else {
//         obj[item] = 1
//     }
// })
// for(let el in obj) {
//     if (obj[el] === 1) {
//         element = el;
//     break
//     }
// }
// return element
// }
// console.log(stray([17, 17, 2]));


// Task 3
// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
// Example: [9, 3, '7', '3']

// function sumMix(arr){
// return arr.reduce((acc, item) => acc + +item, 0)
// }
//  console.log(sumMix([9, 3, '7', '3']));


// Task 4
// Count of positives / sum of negatives
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers 
// and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.
// Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]


// function countPositivesSumNegatives(nums) {
//  return nums.reduce((res, item) => {
//         if (item >= 0 && res[0] < item) {
//             res[0] = item;
//         } else {
//             res[1] += item;
//         }
//         return res
//  }, [-1, 0])
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));


// Task 5
// Return Two Highest Values in List
// Given an array
// You should return the two highest values in a list. 
// If there're less than 2 unique values, return as many of them, as possible.
// The result should also be ordered from highest to lowest.
// Example: [4, 10, 10, 9]  =>  [10, 9]; [1, 1, 1]  =>  [1]

// function twoHighest(arr) {
//     let setArr = [...new Set(arr)];
//     if(setArr.length === 1) {
//         return setArr
//     }
//     let sorted = setArr.sort((a, b) => b - a);
//     return [sorted[0], sorted[1]]
// }

// console.log(twoHighest([1, 1, 1]));

// Task 6 
// Find the Missing Number
// You are given an unsorted array containing all the integers from 0 to 100 inclusively. 
// However, one number is missing. Write a function to find and return this number.

// function missingNo(nums) {
// let sorted = nums.sort((a, b) => a - b);
// for(let i = 0; i < sorted.length; i++) {
//         if (sorted[i] !== i) {
//             return i
//         }
//     }
// }

//  console.log(missingNo([9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16]))


// Task 11
// What will be in the console?
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);


// Task 12
// What will be in the console?
// function name() {
// [1, 2, 3].map(num => {
//     if (typeof num === "number") return;
//     return num * 2;
//   });
// }
