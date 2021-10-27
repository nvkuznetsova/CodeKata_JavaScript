// Task 2
//           function squareSum(numbers){
//             let sum = numbers.map((item) => {
//               let arr = Math.pow(item, 2)
//               return arr
//             })
//               if(sum == 0) {
//                 return 0
//                 } else {
//                 return sum.reduce((a,b) => a+b)
//                 }
//             }

             // Task 3
//             function largestPairSum(numbers) {
//                 const num = numbers.sort((a, b) => a - b);
//                 let el = num.pop();
//                 let el1 = num.pop();
//                 return el + el1
//               }

// Task 4
// function removeDuplicates(nums) {
// for(let i = 0; i < nums.length; i++) {
//    if (nums[i] === nums[i - 1]) {
//       nums.splice(i, 1);
//       i--
//    }
// } 
// return nums.length;
// }

// Task 5
// function makeNumber(string) {
//     let numbers = [];
//    for (let i = 0; i < string.length; i++) {
//       if (!isNaN(parseInt(string[i]))){
//           numbers.push([string[i]])
//       }
//    }
//    return numbers.join('');
//  }
 