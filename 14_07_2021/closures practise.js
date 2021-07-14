1. // write function 'adder' that will be used like that

// function adder(num1) {
// 	return function(num2) {
// 		console.log(num1 + num2);
// 	}
// }

// var add10To = adder(10);
// // var add42To = adder(42);

// add10To(15);    // 25
// // add42To(9);     // 51

2. // tell is there closure or not

// var count = 0;

// function counter(num) {
//     count = count + num;

//     return count;
// }

// function getCount(func) {

// 	var count = 3;

// 	return func(count);
// }

// console.log(getCount(counter));

// console.log( counter() );
// console.log( counter() );
// console.log( counter() );

2. // tell is there closure or not

// var outerFunc = function outerFunc() {
//   var message = 'hello world';

//   var someFunc = (text) => {
//       console.log(text);
//   };

//   var innerFunc = function innerFunc() {
//       someFunc(message);
//   };

//   innerFunc();
// };

// outerFunc();

3. // tell is there closure or not

// var outerFunc = () => {
//   var message = 'hello world';
//   var someFunc = (text) => {
//       console.log(text);
//   };

//   return function innerFunc() {
//       someFunc(message);
//   };
// };

// var innerFunc = outerFunc();

// innerFunc();

4. // write function 'makeCounter' that will be used like that

// function makeCounter() {
// 	let count = 0;

// 	return function counter() {
// 		console.log(count += 1);
// 	};
// }

// var hits = makeCounter();
// var hits2 = makeCounter();

// hits();  // 1
// hits();  // 2
// hits();  // 3

// hits2();
// hits2();
// hits2();

5. // will this function work like the previous one?

// var hits;

// {
//     let count = 0;
//     // var count = 0;

//     hits = function getCurrent() {
//         count = count + 1;

//         console.log(count);
//     };
// }

// hits();
// hits();
// count = 100500;
// hits();
