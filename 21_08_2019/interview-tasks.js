//Task 11 Fibonacci 0, 1, 1, 2, 3...
const fibonacci = n => {
    const res = [0, 1];
    for(let i = 2; i <= n; i++) {
      res.push(res[i-1]+res[i-2]);
    }
    return res[n];
  }
  
  //Task 8 isPalindrom
  const isPalindrom = str => {
    str = str.toLowerCase().replace(/[\,\.\s\!\?\:\-\;]/g, '');
    const revStr = str.split('').reverse().join('');
    return str === revStr;
  }
  
  //Task 9 isAnagram
  const strToObj = str => {
    const obj = {};
    str.split('').forEach(char => {
      obj[char] = (obj[char] + 1) || 1;
    });
    return obj;
  }
  const isAnagram = (str1, str2) => {
    const obj1 = strToObj(str1);
    const obj2 = strToObj(str2);
    
    if(Object.keys(obj1).length === Object.keys(obj2).length) {
      for(let key in obj1) {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
      return true;
    }
    
    return false;
  }
  
  //Task 12 findWowels: a, e, i, o, u
  const findWowels = str => {
    const wowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(item => wowels.includes(item)).length;
  }
