// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead (числа кратые 3)
// If the value is a multiple of 5: use the value "Buzz" instead (числа кратные 5)
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead 
//(числа кратные 3 и 5)
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// function fizzbuzz(n) {
//   const arr = [];
//   for (let i = 1; i<=n; i++){
//     if (i%15 === 0 ){
//       arr.push('FizzBuzz');
//     }
//     else if( i%5 === 0){
//       arr.push('Buzz')
//     }
//     else if( i%3 === 0){
//       arr.push('Fizz')
//     }
//     else{
//       arr.push(i);
//     }
//   }
//   return arr;
//   //code here
// }

// function fizzbuzz(n) {
//   return [...Array(n+1).keys()].slice(1).map(x=>x%15===0?'FizzBuzz':x%3===0?'Fizz':x%5===0?'Buzz':x);
// }

// function fizzbuzz(n)
// {
//   var i = 1, arr = [];
//   while(i <= n) {
//     var fizz = (i % 3 == 0);
//     var buzz = (i % 5 == 0);
//     if(fizz || buzz) {
//       arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
//     }
//     else {
//       arr.push(i);
//     }
//     i++;
//   }
//   return arr;
// }

// var fizzify = fizzbuzz;

// let result = fizzbuzz(15);
// console.log(result);


//--------------------------------------------------------------------------------------
// 2) You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// function sumPositive(arr) {
//   // return arr.reduce((current, next) => next > 0 ? current + next : current, 0);
//   return arr.filter(el => el > 0).reduce((a,b) => a+b, 0)
// }

// console.log(sumPositive([-4, 1, 7, 12]));


//--------------------------------------------------------------------------------------
//3) You are given an array of objects, return the sum of all values
//  [{x: 1}, {x:2}, {x:3}] 6

// function objSum(arr) {
//   return arr.reduce((sum, item) => sum += item.x, 0);
// }

// console.log(objSum([{x: 1}, {x:2}, {x:3}]));

//--------------------------------------------------------------------------------------
// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"), 0);
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

// setTimeout(function timeout() {
//     console.log('Таймаут');
// }, 0);
 
// let p = new Promise(function(resolve, reject) {
//     console.log('Создание промиса');
//     resolve();
// });
 
// p.then(function(){
//     console.log('Обработка промиса');
// });
 
// console.log('Конец скрипта');


//--------------------------------------------------------------------------------------
// 5) Define a function that removes duplicates from an array of numbers and returns 
// it as a result.

// function removeDuplicates(arr){
//   return [...new Set(arr)] 
// }

// console.log(removeDuplicates([1,2,3,3,6,9,7,7,8,9]))

// The order of the sequence has to stay the same.



//--------------------------------------------------------------------------------------
//tasks suggested by the group:

//1:
// Вы пишете функцию, которая будет заменять плохие, ругательные слова в чате, на звездочки, в искомом слове остается лишь
// result -> HI drugs -> HI d***s
// const banWords = ['troll', 'rave', 'drugs', 'drunk'];
// const message = `He behaves like a troll, a TROLL!!!.
// He jokes sharply on the topic of drunks, although he himself is drunk.
//   But I respect him for the fact that he is always against drugs.`

// const replaceBanWords = (inputStr) => {
//   let resultStr = '';
// // Вставить код
//   return resultStr;
// }



//2.https://www.codewars.com/kata/526989a41034285187000de4
//Implement a function that receives two IPv4 addresses, and returns the number of addresses 
//between them (including the first one, excluding the last one).
// 20.0.0.0
// 20.0.0.60

// 20.0.0.10
// 20.1.0.0


// function ipsBetween(start, end){
// let first = start.split('.').map(item => toStr(item)).join('');
//    let second = end.split('.').map(item => toStr(item)).join('');
//     let res = parseInt(second, 2) - parseInt(first, 2)
//     return res
// }

// function toStr(str){
//     let st = Number(str).toString(2)
//     let n = 8 - st.length// console.log([...Array.fill(0,n), ...st].join(''));return [...Array(n).fill(0), ...st].join('')
// }

