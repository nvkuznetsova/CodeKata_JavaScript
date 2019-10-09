// Flatten and sort an array
const flattenAndSort = (arr) => {
    return arr.reduce((arr, curr) => [...curr, ...arr], []).sort((a, b) => a - b);
  }
  
  const fletten = (arr) => arr.flat().sort((a, b) => a - b);
  
  // The Poet And The Pendulum
  const pendulum = (arr) => {
    let newArr = [];
    arr.sort((a, b) => a - b).forEach((item, i) => {
      if (i % 2) {
        newArr.push(item);
      } else {
        newArr = [item, ...newArr];
      }
    });
    
    return newArr;
  }
  
  // Array.diff
  const arrayDiff = (a, b) => {
    return a.filter(aItem => !b.includes(aItem));
  }
  
  // Odd Ones Out!
  const oddOnesOut = (arr) => {
    const families = arr.reduce((obj, curr) => {
      obj[curr] = (obj[curr] + 1) || 1;
      return obj;
    }, {});
  
    return arr.filter(item => families[item] % 2 === 0);
  }
  
  // WeIrD StRiNg CaSe
  const toWeirdCase = (str) => {
    return str.split(' ').map(word => {
      return word.split('').map((char, i) => (i % 2) ? char.toLowerCase() : char.toUpperCase()).join('');
    }).join(' ');
  }
  