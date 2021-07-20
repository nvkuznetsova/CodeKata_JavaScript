1. // write function 'adder' that will be used like that

var add10To = adder(10);
var add42To = adder(42);

add10To(15);    // 25
add42To(9);     // 51

2. // tell is there closure or not

var count = 0;

function counter() {
    count = count + 1;

    return count;
}

console.log( counter() );
console.log( counter() );
console.log( counter() );

2. // tell is there closure or not

var outerFunc = () => {
  var message = 'hello world';

  var someFunc = (text) => {
      console.log(text);
  };

  var innerFunc = () => {
      someFunc(message);
  };

  innerFunc();
};

outerFunc();

3. // tell is there closure or not

var outerFunc = () => {
  var message = 'hello world';
  var someFunc = (text) => {
      console.log(text);
  };

  return function innerFunc() {
      someFunc(message);
  };
};

var innerFunc = outerFunc();

innerFunc();

4. // write function 'makeCounter' that will be used like that

var hits = makeCounter();

hits();  // 1
hits();  // 2
hits();  // 3

5. // will this function work like the previous one?

var hits;

{
    let count = 0;

    hits = function getCurrent(){
        count = count + 1;

        return count;
    };
}

hits();
hits();
hits();

6. // write function 'makeCounter' that will be used like that

add(1)(4)(6)(); // Summ is: 11
add(5)(4)(6)(); // Summ is: 15

7. // write own bind function

someFunc.bind(someObj, [a,b,c])

function bind() {

}

























































// function add(x) {
//   var summ = 0;

//   summ = summ + x;

//   return function addMore(y) {
//     if (!y) {
//       console.log('Summ is: ', summ);
//     }

//     summ = summ + y;

//     return addMore;
//   };
// }