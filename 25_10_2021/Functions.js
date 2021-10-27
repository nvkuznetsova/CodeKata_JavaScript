// Task 1
// How many ways to declare functions do you know?

// function fn(){return null}
// const fn3 = function fn5(){return null}
// const fn3 = function(){return null}

// const fn2 = () => null;
// // this
// // arguments
// // new
// (function name() {}) ()
// (function() {}) ()
// new Function()


// Task 2
// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// function squareSum(arr){
// return arr.map((item) =>Math.pow(item, 2)).reduce((res, item) => res +=item, 0)
// }
// console.log(squareSum([1, 2, 5, 2, 4]))


// Task 3
// Largest pair sum in array
// Given a sequence of numbers, find the largest pair sum in the sequence.
// [10, 14, 2, 23, 19] -->  42 (23 + 19)


// function largestPairSum(array) {
// array.sort((a, b) => b - a);
// return array[0] + array[1];
// }

// console.log(largestPairSum([10, 14, 2, 23, 19]));

// Task 4
// Write a function that will remove duplicates from the sorted array
// Example: [10, 10, 14, 2, 2, 2, 23, 19]

// function removeDuplicates(array) {
// array.sort((a, b) => a - b);
// let prev = array[0];
// return array.reduce((arr, item) => {
//         if (prev === item) {
//             array.push(item);
//         } else {
//             prev = item
//         } 
//         return arr
// }, [array[0]])
// }

// function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index).sort((a, b) => a - b)
//   }

// function removeDuplicates(arr){
//     arr.sort((a,b) => a-b);
//     let res = [arr[0]];
//     for (let i = 0; i < arr.length-1; i++) {
//     if (arr[i] != arr[i+1]) {
//     res.push(arr[i+1])
//         }
//     }
//     return res;
//     }


// function removeDuplicates(array) { 
//     array.sort((a, b) => a - b);
//    for(let i = 0; i < array.length; i++) {
//        if (array[i] === array[i + 1]) {
//            array.splice(i, 1);
//            i--
//        }
//    } return array
// }

// function removeDuplicates(array) { 
//     array.sort((a, b) => a - b);
//     let count = 0;
//     let item = array[0]; 
//    for(let i = 0; i < array.length; i++) {
//        if (item === array[i]) {
//            count++;
//        } else {
//            array.splice(i, count);
//            count = 0;
//        } 
//    } return array
// }


// function removeDuplicates(array) {    
//     const found = [];
//     return array.filter((item) => {
//         if (!found.includes(item)) {
//             found.push(item);
           
//             return true;
//         }
       
//         return false;
//     });
// }

// function removeDuplicates(arr) {
//     let sortedArray = arr.sort((a, b) => a - b);
//     let resultArray = [];
    
//     for (let i = 0; i < sortedArray.length; i++) {
//     let filtered = sortedArray.filter(() => sortedArray[i]);
//     if (!resultArray.includes(filtered[i])) {
//     resultArray.push(filtered[i]);
//     }
// } return resultArray
// }

// const removeDuplicates = arr => arr.sort((a, b) => a - b).reduce((acc, el) => acc.includes(el) ? acc : [...acc, el] ,[])
//  console.log(removeDuplicates([10, 10, 10, 10, 14, 2, 2, 2, 23, 19]));
// function removeDuplicates(array) {​​​​​​​​
// array.sort((a, b) => a - b);
// return array.reduce((arr, item) => {​​​​​​​​
//         if (arr[arr.length-1] !== item) {​​​​​​​​
//             arr.push(item);
//         }​​​​​​​​
//         return arr
// }​​​​​​​​, [array[0]])
// }​​​​​​​​


// Task 5
// Create a function called “makeNumber”. 
// It should accept a string with different characters and return a string of numbers from the passed argument.
// Example: makeNumber('erer384jjjfd123'); //=>'384123'

// function makeNumber(str) {
//     let res = str.split('')
//     let num = [];
//     for(let i = 0; i < res.lenght; i++) {
//         if (isNaN(res[i])) {
//             num.push(res[i]);
//         }
//     } 
//     return num.join('')
//  }


//  function makeNumber(str) {
    //     return str.split("").filter((item) => item.match(/\d/)).join("")
    //  }
    
    // console.log(makeNumber('erer384jjjfd123'));
    // function makeNumber(str){
    // let regex = /[a-z]+/g;
    // return str.replace(regex, '')
    // }​​​

//     console.log(makeNumber('erer384jjjfd123'));
//     function makeNumber(str) {​​​
// return str.split('').filter(item => Number(item)).join('')
// }

// function makeNumber(str) {
//     return str.split('').reduce((str, item) => {
//       if(!isNaN(item))
//         str += item ;
//             return str
//     }, '')
//     }​​​
//     console.log(makeNumber('erer384jjjfd123'));
 