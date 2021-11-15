
//- What is THIS?


// 1. What will be in console?
//-------------------------------
// console.log('console.log', this);

//2.  What will be in console?
//-------------------------------
//function(){}
// 'use strict';
// console.log('console.log', this);
// console.log(this === window);

//3.  What will be in console?
//-------------------------------
// this.b = "MDN";
// console.log(window.b);
// console.log(b);

//3.  What will be in console?
//-------------------------------
// function f1(){
//   return this;
// }

// console.log( f1() );

//4.  What will be in console?
// //-------------------------------
// "use strict"; //???
// function f2(){
//   return this; //????
// }
// console.log( f2() );

//5.  What will be in console?
//-------------------------------
// Let's use IIFE (Immediately Invoked Function Expression) 
// (function () {
//   console.log('IIFE called in global scope:', this);
// })(); 

//6.  What will be in console?
//-------------------------------
// Let's use arrow function
// const arrowFn = () => {
//   console.log('Arrow function called in global scope:', this);
// };
// arrowFn();

//7.  What will be in console?
//-------------------------------
// Let's use arrow function
// const arrowFn = () => {
//   'use strict';
//   console.log('Arrow function called in global scope:', this);
// };
// arrowFn();

//8.  What will be in console?
//-------------------------------

// let x = 10;

// function foo () {
//   let x = 5;
//   console.log(this.x);
// };

// let obj = {
//   x: 4, 
//   someMethod: function() {
//     console.log(this.x);
//   },
//   bar: foo,
// };

// obj.someMethod(); //4
// obj.bar(); //10 //4

//9.  What will be in console?
//-------------------------------
// function foo() {
// 	console.log( this.a );
// }

// let objInner = {
// 	a: 42,
// 	foo: foo
// };

// let objOuter = {
// 	a: 2,
// 	objInner: objInner
// };

// objOuter.objInner.foo();//42

//10.  What will be in console?
//-------------------------------

// let f = function() {
//     this.x = 5; //obj.x = 5
//     (function() {
//         this.x = 3; //window.x =3
//     })();
//     console.log(this.x);
// };

// let obj = {
//     x: 4, 
//     m: function() {
//     // this.x = 6;
//     console.log(this.x);
// }};

// f(); //3
// new f(); //5
// f.call(f); //5
// new obj.m(); //{} this



// 11. Where is this?
//----------------------------------------
// 'use strict';
// let person = {
//     name: 'John Doe',
//     getName: function() {
//        console.log(this.name === 'John Doe');
//     }
// };

// setTimeout(() => person.getName, 1000); 
//? what will be in console?

//how to improve?



//12. call, bind, apply

// function f(a, b, c) {
//   // console.log(arguments);
//   return a * b + c;
// }

// // // 12-A:
// // console.log(f.bind(f, 1, 2, 3));  
// console.log(f.bind(f, 1, 2, 3)()); 
// console.log(f.bind(f, 10, 20, 30)()); 
// console.log(f.call(f, 1, 2, 3));  
// console.log(f.apply(f, [1, 2, 3]));  

// //12-B:
// let b = f.bind(f, 1, 2, 3);  
// console.log( b(10, 20, 30) ); 

// 12-C
// let b = f.bind(f, 1, 2, 3);  
// let c = b.bind(null);
// console.log( c(10, 20, 30) ); 

//what is in arguments array-like object? what if to put console.log(arguments) inside f ?


// //13. write polyfill for bind (possible to use apply)
// let obj = {
//   a: 'value'
// }
// function fn(b, c){
//   console.log(this.a, b, c);
// }

// // fn.bind(obj)(1, 2); //value 1 2
// // fn.bind(obj, 1)(2);
// // fn.bind(obj, 1, 2)();

// function bind(fn, context, ...arg1) {
//   return function(...arg2){
//     return fn.apply(context, [...arg1, ...arg2])
//   }
// };

// // f(1)(2)

// bind(fn, obj)(1,2); //value 1 2
// bind(fn, obj, 1)(2);
// bind(fn, obj, 1, 2)();
