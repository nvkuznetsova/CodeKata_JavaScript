 // Task 1
// function wiz(list1) {
//   let arr = list1.filter(el => el.faculty === 'Gryffindor')
//   return arr.map(el => el.firstName)
// }
 

   // Task 2
//   function stray(numbers) {
//     return numbers.find(el => numbers.indexOf(el) === numbers.lastIndexOf(el))
//     }

     // Task 3
//     function sumMix(x){
//         let arr = x.map((item) => +item)
//         return arr.reduce((a,b) => a+b)
//       }

       // Task 4
//       function countPositivesSumNegatives(input) {
//         if (!input || !input.length) {
//           return []
//         } else {
//         let arr1 = input.filter(el => el > 0);
//         let arr2 = input.filter(el => el <= 0)
//         let arr3 = arr2.reduce((a, b) => a + b, 0)
//         return [arr1.length, arr3]
      
//       }
//         }

         // Task 5
//         function twoHighest(arr) {
//           if (arr === []) {
//             return []
//           } else {
//           let arr1 = Array.from(new Set(arr))
//           let arr2 = arr1.sort((a, b) =>  b - a)
//           return arr2.splice(0,2)
//         }
//           }

           // Task 6
//           function missingNo(nums) {
//             let arr = []
//             for(let i = 0; i < nums.length + 1; i++) {
//               arr.push(i)
//             }
//             let num = arr.filter(el => nums.includes(el) !== arr.includes(el))
//             if(num) {
//             return +num
//             } return 0
//           }

// Task 11
// [1, 2, 3, 7 x empty, 11]

// Task 12
// [undefined, undefined, undefined]
