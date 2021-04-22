// 1

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// function descendingOrder(num){
//     return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
// }

// console.log(descendingOrder(0)); // 0
// console.log(descendingOrder(1)); // 1
// console.log(descendingOrder(111)); // 111
// console.log(descendingOrder(15)); // 51
// console.log(descendingOrder(1021)); // 2110
// console.log(descendingOrder(123456789)); // 987654321



// 2

// Your online store likes to give out coupons for special occasions.
// Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

// function checkCoupon(coupon, expectedCoupon, today, expire){
//     const todayDate = new Date(today);
//     const expireDate = new Date(expire);
//     return (coupon === expectedCoupon && todayDate <= expireDate);
// }

// console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014')); // true
// console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')); // false



// 3
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

// Input >> Output Examples:

// minValue ([1, 3, 1])  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

// function minValue(object) {
//     return Number(Array.from(new Set(object)).sort().join(''));
// }

// console.log(minValue([1, 3, 1])); // 13
// console.log(minValue([4, 7, 5, 7])); // 457
// console.log(minValue([4, 8, 1, 4])); // 148
// console.log(minValue([5, 7, 9, 5, 7])); // 579
// console.log(minValue([6, 7, 8, 7, 6, 6])); // 678
// console.log(minValue([5, 6, 9, 9, 7, 6, 4])); // 45679
// console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // 1

// const arrayOfStrings = ['a', 'z', 'c'];
// console.log(arrayOfStrings.sort());
// console.log(arrayOfStrings.sort((a, b) => b - a));
// const arrayOfNumbers = [1, 2, 12, '11'];
// const arrayOfNumbersToString = ['1', '2', '12', '11'];
// console.log(arrayOfNumbers.sort());
// console.log(arrayOfNumbers.sort((a, b) => b - a));
// console.log(arrayOfNumbersToString.sort());
// console.log(arrayOfNumbersToString.sort((a, b) => b - a));



// 4

// You need to make a function multiplyAll/multiply_all which takes an array of integers as an argument.
// This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.

// function multiplyAll(array){
//     return (number) => array.map((element) => element * number);
// }

// console.log(multiplyAll([1, 2, 3])(1)); // [1, 2, 3]
// console.log(multiplyAll([1, 2, 3])(2)); // [2, 4, 3]
// console.log(multiplyAll([1, 2, 3])(0)); // [0, 0, 0]



// 5

// We want to create a function that will add numbers together when called in succession.

// add(1)(2);
// // returns 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // 6
// add(1)(2)(3)(4); // 10
// add(1)(2)(3)(4)(5); // 15
// and so on.

// A single call should return the number passed in.

// add(1); // 1
// We should be able to store the returned values and reuse them.

// var addTwo = add(2);
// addTwo; // 2
// addTwo + 5; // 7
// addTwo(3); // 5
// addTwo(3)(5); // 10
// We can assume any number being passed in will be valid whole number.

// function add(num) {
//     let sum = num ? num : 0;
//     let totalCounter = (anotherNum) => {
//         sum += anotherNum;
//         return totalCounter;
//     }
//     totalCounter.toString=()=>sum;
//     return totalCounter;
// }

// console.log(add(1)); // 1
// console.log(add(1)(2)); // 3
// console.log(add(1)(2)(3)); // 6

