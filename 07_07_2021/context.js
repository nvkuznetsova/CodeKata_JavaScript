// 1

// var dog1 = {
//     name: 'Chester',
//     breed: 'beagle',
//     intro: function(){
//       console.log(this);
//     }
// };
// var dog2 = {
//     name: 'Chester',
//     breed: 'beagle',
//     intro: () => {
//       console.log(this);
//       return this;
//     }
// };
  
// dog1.intro();
// dog2.intro();
// console.log(dog2.intro());


// 2

// var obj1 = {
//     hello: function() {
//     //   console.log('Hello world');
//       return this;
//     },
//     obj2: {
//         breed: 'dog',
//         speak: function(){
//             //   console.log('woof!');
//               return this;
//           }
//       }
//   };
   
//   console.log(obj1.hello());
//   console.log(obj1.obj2.speak());


// 3

// var obj1 = {
//     hello: function() {
//       return this;
//     }
// };

// var obj2 = {
//     hello: () => this
// };
   
// console.log(obj1.hello());
// console.log(obj2.hello());


// 4

// const obj = { data: '123' };

// const append = function (text) {
//   return `${this.data}${text}`;
// };

// // obj.append = append;

// // console.log(obj.append('45'));
// console.log(append.call(obj, '45'));



// 5

// function test1() {
//     console.log(this);
// }
  
// test1();

// const test3 = () => {
//     console.log(this);
// }
  
// test3();


// function test2() {
//     'use strict';
//     console.log(this);
// }

// test2();


  
// 6
// var f = function() {
//     this.x = 5;
    
//     (function() {
//         this.x = 3;
//     })();
//     console.log(this.x);
// }; 

// f();


// 7
// var F = function() {
//     this.x = 5;
    
//     (function() {
//         this.x = 3;
//         // console.log(this);
//     })();
//     console.log(this.x);
// };

// var obj = new F();
// console.log(obj);
// console.log(F);
// // console.log(this);

// const func = function() {
//     console.log(this.x);
// }
// func();
// console.log(F);



// 8
// var obj = {
//     x: 4, 
//     m: function() {
//         this.y = 5;
//         console.log(this);
//     }
// };

// obj.m();
// new obj.m();
// console.log(new obj.m());


// 9
// var f = function() {
//     this.x = 5;

//     (function() {
//         this.x = 3;
//     })();
//     console.log(this.x);
// };

// f.call(f);
// console.log(f.x);
// console.log(f);



// 10
// var f = function() {
//     this.x = 5;

//     (function() {
//         this.x = 3;
//     })();
//     console.log(this.x);
// };

// var obj = {
//     x: 4, 
//     m: function() {
//         console.log(this.x);
//     }
// };

// obj.m.call(f);

// f.call(f);
// obj.m.call(f);
// console.log(obj);

// var a = require('./a.js');
// module.exports = {
//     a: 1
// }
// this.a = 1;
// console.log(this === module.exports);
// console.log(module.exports);

// let x = 0;
// function func(x=1, func_x = function() { console.log(x)}) {
//     var x = 2;
//     func_x();
// }
// func();


