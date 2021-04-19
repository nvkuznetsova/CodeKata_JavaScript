/* 1. Spacify
Modify the spacify function so that it returns the given string with spaces inserted between each character.
spacify("hello world") // returns "h e l l o   w o r l d" */

function spacify(str) {
    return str.split('').join(' ');
}
const str = "hello world";
console.log(spacify(str));

/*2. "WeIrD StRiNg CaSe
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"*/

function toWeirdCase(str) {
    const wordToWeirdCase = (word) => word.split('').map((element, inx) => (
        inx % 2 ? element.toLowerCase() : element.toUpperCase()
    )).join('') 
    return str.split(' ').map(wordToWeirdCase).join(' ');
}
console.log(toWeirdCase('Wei rd string case'));
console.log(toWeirdCase('Test  ing'));

/*3. The Poet And The Pendulum
Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum
The Smallest element of the list of integers , must come in center position of array/list.
The Higher than smallest , goes to the right .
The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.*/

function pendulum(arr) {
    arr.sort((a,b) => a - b);
    const result = [arr.shift()];
    arr.forEach((element, inx) => {
        if (inx % 2) {
            result.unshift(element)
        } else {
            result.push(element)
        }
    });
    return result; 
}
console.log(pendulum([11, -16, -18, 13, -11, -12, 3, 18]))

/*4. Two Sum
Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value. 
The indices of these items should then be returned in a tuple like so: (index1, index2).*/

//1 option
function twoSum(arr,x) {
    for (i=0; i<arr.length; i++) {
        const element = arr[i];
        const i2 = arr.indexOf(x - element);
        if (i2 > -1) {
            return [i,i2];
        }
    }
}
console.log(twoSum([1,2,3,4,5,9],11))

//2 option
function twoSums2(arr,x) {
    let hashMap = {};
    for (let i=0;i<arr.length;i++) {
        const target = x - arr[i];
        if (target in hashMap) {
            return [hashMap[target],i];
        }
        hashMap[arr[i]] = i;
    }
}