//Task 16 'Hello World!'
const everyWordReverse = str => {
    return str.split(' ').map(word => {
      return word.split('').reverse().join('');
    }).join(' ');
  }
  
  //Task 19 'test reverse'
  const someWordsReverse = str => {
    return str.split(' ').map(word => {
      return (word.length >= 5) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }
  
  //Task 18
  const getSum = (a, b) => {
    if(a === b) return a;
    let sum = 0;
    [a, b] = (a < b) ? [a, b] : [b, a];
    while (a <= b) {
      sum += a++;
    }
    return sum;
  }
  
  // Task 20
  const makeArr = n => {
    const arr = [];
    for (let i = 1; i <=n; i++) {
      arr.push(i);
    }
    return arr;
  } 
  
  const makeArr2 = n => {
    return Array.from(Array(n+1).keys()).slice(1);
  }
  
  //Task 17 [55, 77, -100, 333, 8, 7]
  const getMaxSubSum = arr => {
    let max = 0;
    let sum = 0;
    arr.reduce((prev, curr) => {
      sum = (sum < 0) ? 0 : prev+curr;
      max = Math.max(max, sum);
      return sum;
    }, 0);
    return max;
  }