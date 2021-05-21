// The 'if' function (codewars)
const _if = (condition, fn1, fn2) => {
    if (condition) {
      fn1();
      return;
    } 
    fn2();
  }
  

  //Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!! (codewars)
  const sum_dig_pow = (a, b) => {
    [a, b] = a < b ? [a, b] : [b, a];
    let res = a === 1 ? [...Array(10)].map((_, i) => i).slice(1) : [];
    a = a === 1 ? 10 : a;
    for (let i = a; i <= b; i++) {
      let s = String(i).split('').reduce((sum, curr, j) => sum += curr**(j+1), 0);
      if (s === i) res.push(i);
    }
    
    return res;
  }