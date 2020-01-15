// /////////////
// A Needle in the Haystack
// /////////////

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));


// /////////////
// Odd Ones Out!
// /////////////

function oddOnesOut(arr) {
    const obj = arr.reduce((acc, elem) => {
      elem in acc ? acc[elem]++ : acc[elem] = 1 ;
      return acc;
    }, {});
  return arr.filter(elem => !(obj[elem] % 2));
}

console.log(oddOnesOut([1, 1, 2, 2, 3, 3, 3, 4, 4]));


// /////////////
// Highest Scoring Word
// /////////////

function high(string) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  string = string.split(' ');
  const arr = string.reduce((acc, elem) => {
    acc.push(elem.split('').reduce((acc, elem) => acc += letters.indexOf(elem) + 1, 0));
    return acc;
  }, []);
  
  return string[arr.indexOf(Math.max(...arr))];
}

console.log(high('testing for gibozx mwwoae xxxxxx mzgrkh kwbjqi'));


// /////////////
// Array.diff
// /////////////

function array_diff(a, b) {
  return a.filter(element => !b.includes(element));
}

console.log(array_diff([1,8,2,6], [8]));


// /////////////
// Pyramid Array
// /////////////

function pyramid(n) {
  const arr = [];
  for(let i = 0; i < n; i++) {
    const arr2 = Array(i+1);
    arr2.fill(1);
    arr.push(arr2);
  }
  return arr;
}

function pyramid(n) {
  return Array(n).fill().map((e,i) => Array(i+1).fill(1));
}

console.log(pyramid(8));


// /////////////
// Max Multiple
// /////////////

function maxMultiple(divisor, bound){
  return Math.floor(bound / divisor) * divisor
}

console.log(maxMultiple(2,7));