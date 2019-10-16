// Descending Order 
const desend = (num) => {
    return Number(String(num).split('').sort((a, b) => b - a).join(''));
  }
  
  // Reverse Number
  const reverseNum = (num) => {
    let isNegative = num < 0;
    let n = String(Math.abs(num)).length === 1 ? Math.abs(num) : Number(String(Math.abs(num)).split('').reverse().join(''));
    return isNegative ? -n : n;
  }
  
  // Function Iteration
  const double = (num) => num*2;
  
  const createIterator = (func, n) => {
    return (acc) => {
      let res = func(acc);
      for (let i = 1; i < n; i++) {
        res = func(res);
      }
      
      return res;
    }
  }
  
  const getDouble = createIterator(double, 4);
  
  // What's a Perfect Power anyway?
  const isPP = (n) => {
    for (let m = 2; m < n; m++) {
      for (let k = 2; m**k <= n; k++) {
        if (m**k === n) return [m, k];
      }
    }
    
    return null;
  }