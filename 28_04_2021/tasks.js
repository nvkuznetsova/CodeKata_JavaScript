// 'use strict';
// 1
// console.log(false == undefined); // false
// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log(false == null); // false


// 2
// const numbers = [1, 2, 3, 4, 5];
// const [x, y, z, a, b, c, d] = numbers;
// console.log(d);


// 3
// let x = 3;
// function fn() {
//     console.log(x);
//     let x = 10;
//     return;
//     // function x() {}
// }

// fn();
// console.log(x);


// 4
// console.log(1);
// const promise = new Promise((resolve, reject) => {
//     console.log(4);
//     resolve();
// });
// promise.then(() => {
//     console.log(5);
// });
// setTimeout(function() {
// 	console.log(2);
// }, 0);
// console.log(3);


// 5
// var obj = {
//     foo: 'bar'
// };

// function func(x) {
// 	x = 1;

// 	return x;
// }

// console.log(func(obj));
// console.log(obj);


// 6
// TRUE OR FALSE

// const a = 'false'; 
// const b = ' ';
// const c = {};
// const d = [];
// const e = new String('');
// const f = new Boolean(false);
// const g = new Boolean('');
// const h = Boolean('');
// const i = true % 1;
// const j = '' % 1;

// console.log(!!a);
// console.log(!!b);
// console.log(!!c);
// console.log(!!d);
// console.log(!!e);
// console.log(typeof new String(''));
// console.log(!!f);
// console.log(!!g);
// console.log(Boolean(h)); // !!h
// console.log(!!i);
// console.log(!!j);


// 7
// function makeUser1() {
//     return {
//         name: "Джон",
//         ref: this
//     };
// };
  
// let user1 = makeUser1();

// function makeUser2() {
//     return {
//         name: "Джон",
//         ref() {
//             return this;
//         }
//     };
// };
  
// let user2 = makeUser2();

// console.log( user1.ref.name );
// console.log( user2.ref() );


// 8
// let user = {
//     name: "Джон",
//     go: function() { console.log(this.name) }
// }
// (user.go)()


// 9
// Digital Root
// Given n, take the sum of the digits of n. 
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function sum (n){
//     let resultNumber = n.toString().split('').reduce((acc, s) => acc + Number(s), 0);
//     return resultNumber >= 10 ? sum(resultNumber) : resultNumber;
// }

// function sum(n) {
//     return (n - 1) % 9 + 1; 
// }

// function sum(n) {
//     return (n % 9) || 9; // 9 4 2 | 
// }

// console.log(942 % 9);

// console.log(sum(16));
// console.log(sum(942));
// console.log(sum(132189));
// console.log(sum(493193));