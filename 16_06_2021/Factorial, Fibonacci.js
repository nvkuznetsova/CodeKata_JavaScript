//EXERCISE 2, iteration vs recursion

const iterativeFactorial = (n) => {
  if (n <= 1) {
    return 1;
  }
  let res = 1;
  // for (let i = 1; i <= n; i++) {
  //   res = res * i;
  // }
  let i = 1;
  while (i <= n) {
    res *= i;
    i += 1;
  }
  return res;
};

const recursiveFactorial = (n) => {
  if (n <= 1) return 1;

  return n * recursiveFactorial(n - 1);
};

console.log(iterativeFactorial(5));

////////////////////////////

const imperativeFibonacci = (n) => {
  //  каждое последующее число - сумма двух предыдущих
  if (n < 0) {
    return false;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let previous = 0;
  let current = 1;
  let next;

  for (let i = 2; i < n; i++) {
    next = previous + current;
    previous = current;
    current = next;
  }
  return current;

};

console.log(imperativeFibonacci(5));

const recursiveFibonacci = (n, memo = {}) => {
  // TODO
  if (n < 0) {
    return false;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  if (memo[n]) {
    return memo[n];
  }

  return memo[n] = recursiveFibonacci(n - 1, memo) + recursiveFibonacci(n - 2, memo);
};

console.log(recursiveFibonacci(50));
