// {
//   function() {},

//   [[environment]] = {
//     x: 5,
//     y: 3,
//   }
// }

// const a;

// function() {
//   const x = 5;
//   const y = 3;

//   function() {

//     console.log(a);
//   }
// }

function counter() {
  let count = 0;

  return function() {
    return count++;
  }
}

// const counterFunc = counter();
// const counterFunc2 = counter();

// console.log(counterFunc());
// console.log(counterFunc());
// console.log(counterFunc());

// console.log(counterFunc2());
// console.log(counterFunc2());

const fibonacci = (n) => {
  return n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

const memo = (f) => {
  const cache = {};

  return function (n) {
    if (!(n in cache)) {
      cache[n] = f(n);
      return `Calculated: ${cache[n]}`;
    }
    return `From cache: ${cache[n]}`;
  };

};

// const memoFib = memo(fibonacci);

// console.log(memoFib(7)); // calculated
// console.log(memoFib(7)); // from cache
// console.log(memoFib(5)); // calculated

function sum(a, b) {
  return a + b;
}

function carry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function hardCurry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

// const hardCarried = hardCurry(sum);

// console.log(carriedSum(3));






function partial(f) {
  const now = new Date().getHours() + ':' + new Date().getMinutes();
  return function(phrase) {
    return f(now, phrase);
  }
}


// const sayNow = partial(user.say.bind(user));

// console.log(sayNow('Hi!'));


Function.prototype._bind = function () {
  const [context, ...bindedArguments] = arguments;
  const thatFunc = this;
  return function() {
    thatFunc.apply(context, [...bindedArguments, ...arguments]);
  }
}

const user = {
  firstName: 'John',
  say(time, phrase) {
    return function() {
      console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    }
  },
};

let say = user.say(new Date().getHours() + ':' + new Date().getMinutes(), 'Hi!');
say = say._bind(user);
console.log(say());