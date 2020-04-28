/*       СЧЕТЧИК НА ЗАМЫКАНИИ      */
function counter() {
  let count = 0;
  return function() {
    return count++;
  }
}

const counterFunc = counter();
const counterFunc2 = counter();

// console.log(counterFunc());
// console.log(counterFunc());
// console.log(counterFunc());

// console.log(counterFunc2());
// console.log(counterFunc2());

/*       МЕМОИЗАЦИЯ      */
const fibonacci = (n) => {
  return (n === 0 || n === 1) ? n : fibonacci(n-1) + fibonacci(n-2);
}

const memo = (f) => {
  const cache = {};

  return (n) => {

    if (!(n in cache)) {
      cache[n] = f(n);
      console.log('Calculated!');
    }

    return cache[n];
  }
}


const memoFib = memo(fibonacci);
// 0 1 2 3 5 8 13 21
// console.log(memoFib(7));
// memoFib(7);
// memoFib(7);
// memoFib(8);

/*       КАРРИРОВАНИЕ      */
function sum(a, b) {
  return a + b;
}

const carriedSum = carry(sum);
// console.log(carriedSum(3)(4));

function carry(f) {
  return function(a) {
    return function(b) {
      return f(a,b);
    }
  }
}

/*       PARTIAL      */
const user = {
  firstName: 'John',
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  },
};

function partial(f, time) {
  return function(phrase) {
      return f.call(this, time, phrase);
  }
}

function partialWithContext(context, f, time) {
  return function(phrase) {
      return f.call(context, time, phrase);
  }
}

user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
// user.sayNow('Hey!');

const sayNow = partialWithContext(user, user.say, new Date().getHours() + ':' + new Date().getMinutes());
// sayNow('Hello!');

/*       CUSTOM BIND      */
Function.prototype._bind = function() {
  const thatFunc = this;
  const [context, ...bindedArgs] = arguments;
  return function(...args) {
    return thatFunc.call(context, ...bindedArgs, ...args);
  }
}

const sayHi = user.sayNow;
const bindedSayHi = sayHi._bind(user);
// bindedSayHi('HI!');
