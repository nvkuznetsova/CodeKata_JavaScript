// Closures and Scopes
const createFunctions = (n) => {
    return [...Array(n)].map((_, i) => () => i);
  }
  
const callbacks = createFunctions(5);
  
  // Running Average
  const runningAverage = () => {
    let arr = [];
    return (n) => {
      arr.push(n);
      let aver = arr.reduce((sum, curr) => {
        return sum + curr;
      }, 0)/arr.length;
      return Number(aver.toFixed(2));
    }
  }
  
  // Currying functions: multiply all elements in an array
  const mulArr = (arr, n) => {
    return arr.map(item => item*n);
  }
  
  const curryMul = (n) => {
    return (arr) => {
      return arr.map(item => item*n);
    }
  }
  
  const doubleArr = curryMul(2);
  const tripleArr = curryMul(3);
  
  // sum function
  const sum = (a, b, c) => a + b + c;
  
  const curry = (func) => {
    
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    } 
  }
  
  const currySum = curry(sum);
  const addTwo = currySum(2);
  
  // Memoized Fibonacci
  const fibonacci = (n) => {
      if(n==0 || n == 1)
          return n;
      return fibonacci(n-1) + fibonacci(n-2);
  }
  
  const memo = (func) => {
    let memoizedData = {};
    
    return (n) => {
      if (n in memoizedData) {
        console.log('I am in cashe');
        return memoizedData[n];
      } else {
        console.log('I am counted');
        return memoizedData[n]  = func(n);
      }
    }
  }
  
  const memoFib = memo(fibonacci);