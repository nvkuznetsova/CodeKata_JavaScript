//Task N1. Remember Memoization On KodeCata GitHub
// Memoized Fibonacci
const fibonacci = n => {
  console.log("I am called", n);
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

//Write function memo(func) which memorises the result of fibonacci
const memo = func => {
  const memoizedData = new Map();

  return n => {
    if (!memoizedData.has(n)) {
      console.log("Not in cash", n);
      memoizedData.set(n, func(n));
    }
    console.log("I am taken from Cash");
    console.log(Object.entries(memoizedData));
    return memoizedData.get(n);
  };
};

const memoFib = memo(fibonacci);
console.log(memoFib(2));
console.log(memoFib(3));
console.log(memoFib(2));

//Task N2. Trick with creating an Array of Function with closure over numbers
//Warmup how to create an Array of random numbers
//result should be:
function createFunctions(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => {
      return function() {
        return i;
      };
    });
}
const callbacks = createFunctions(6);
console.log(callbacks[0]());
console.log(callbacks[1]());
console.log(callbacks[2]());

// Hard part:
// Usage:
let user = {
  firstName: "John",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  },
};

const partial = (func, ...argsBound) => {
  return function(...argsScope) {
    const myThis = this;
    console.log(myThis);
    return func.call(this, ...argsBound, ...argsScope);
  };
};


// add a partial method with fixed time
user.sayNow = partial(
  user.say,
  new Date().getHours() + ":" + new Date().getMinutes(),
);
user.sayNow("Hellwo");
// Something like:
// [10:00] John: Hello!

// Task 4 - Write your own custmo .bind function
Function.prototype.bind = function() {
  var thatFunc = this,
    thatArg = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var funcArgs = [...args, ...arguments];
    return thatFunc.apply(thatArg, funcArgs);
  };
};
