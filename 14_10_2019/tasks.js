// Detect Pangram
const isPangram = (string) => {
    const alphabet = 'qwertyuiopasdfghjklzxcvbnm';
    string = string.toLowerCase();
    return alphabet.split('').every(char => string.includes(char));
  }
  
  // IQ Test
  const iqTest = (numbers) => {
    const numsArr = numbers.split(' ');
    const s = numsArr.slice(0, 3).reduce((sum, curr) => {
      return (sum+curr)%2;
    }, 0);
    
    if (s <= 1) {
      return numsArr.findIndex(item => item%2) + 1;
    } else {
      return numsArr.findIndex(item => item%2 === 0) + 1;
    }
  }
  
  const iqTest1 = (numbers) => {
    const o = numbers.split(' ').reduce((obj, curr, i) => {
      (curr%2) ? obj.odd.push(i+1) : obj.even.push(i+1);
      return obj;
    }, {odd: [], even: []});
    return (o.odd.length === 1) ? o.odd[0] : o.even[0];
  }
  
  // compute cube as sums
  const findSummands = (n) => {
    const a0 = n * (n-1) + 1;
    return [...Array(n)].map((_, i) => a0 + 2*i);
  }
  
  // Extending JavaScript Objects: Contains Method
  String.prototype.contains = function(substr, isCaseSens) {
    let contain;
    if (isCaseSens) {
      contain = this.indexOf(substr);
    } else {
      contain = this.toLowerCase().indexOf(substr.toLowerCase());
    }
    return (contain === -1) ? false : true;  
  }
  
  // Generate Sequence
  const generateSequence = (n) => {
    const symbols = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789';
    return [...Array(n)].map(() => {
      return symbols[Math.floor(Math.random() * symbols.length)]; 
    }).join('');
  }