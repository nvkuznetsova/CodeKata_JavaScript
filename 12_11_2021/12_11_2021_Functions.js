// Task1
// Create function pow(x,n), which returns x to the power of n (x*x*...*x)
{
  // function pow(x,n) {
  //   let res = x;
  //   for (let i = 1; i<n; i++){
  //     res *=x;
  //   }
  //   return res
  // }

  // function pow(x,n) {
  //   if(n===1){
  //     return x
  //   }
  //   return pow(x,n-1)*x
  // }

  // function pow(x,n) {
    
  // }


  // console.log(pow(2,3)); //8   
  // console.log(pow(5,2)); //25
}
//Task2
//Implement zipWith
{
// zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array.

// If the arrays are of unequal length, the output will only be as long as the shorter one.
// (Values of the longer array are simply not used.)

// Inputs should not be modified.

// Examples
// zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
// zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

// zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
// zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions

// function zipWith(fn,arr1,arr2) {
//   return arr1.map((item, index)=> {
//     return fn(item, arr2[index])
//   })
// }

// const zipWith = (fn, arr1, arr2) => {
//   return arr1.reduce((res,item, index)=> {

//     let fnRes = fn(item, arr2[index]);
//     if (isFinite(fnRes)){
//       res.push(fnRes)
//     }
//     return res
//   }, [])
// }


// console.log(zipWith( Math.pow, [1,10,10,10,10], [0,1,2,3] ))//  [1,10,100,1000]
// console.log(zipWith( Math.max, [0,4,7,1,4,7], [0,7,1,4,7,1,15] )) // [4,7,7,4,7,7]);

}

// Task 3
// Find outliner
{
  // You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

//   [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// function findOutlier(arr) {
//   let evenArr = arr.filter(item=>item%2===0)
//   return evenArr.length ===1?evenArr[0]:arr.find(item=>item%2!==0)
// }

// console.log(findOutlier([1, 2, 3])); //2
// console.log(findOutlier([2,6,8,-10,3])); //3
}

// Task 4
// The Vowel Code
{
//   Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// function encode(str) {
//   return str.replace(/[aeiou]/g, function (match) { return '_aeiou'.indexOf(match) })
// }
// function decode(str) {
//   return str.replace(/[1-5]/g, function (match) {switch(match){
//     case '1': return 'a';
//     case '2': return 'e';
//     case '3': return 'i';
//     case '4': return 'o';
//     case '5': return 'u';
//   }})
// }

// function encode(str){
//   return [['a', 1], ['e', 2], ['i', 3], ['o', 4], ['u', 5]].reduce((current, next)=>{
//     console.log(typeof String.prototype.replaceAll);
//     return current.replaceAll(next[0], '.')
//   },str)
// }

const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')

console.log(encode('This is an encoding test.')); //'Th3s 3s 1n 2nc4d3ng t2st.'
console.log(decode('h2ll4'));//'hello'
}


// ANSWERS


function truthTable (f) {
  let params = [...Array(f.length)].map((_,i)=>String.fromCharCode(65+i))
  let head = `${params.join` `}\t\t${f.name||'f'}(${params.join`,`})\n\n`
  let body = [...Array(2**f.length)].map((_,i)=>{
    let args = [...i.toString(2).padStart(f.length,0)].map(Number)
    let res = +f(...args)
    return `${args.join` `}\t\t${res}`
  }).join`\n`
  return head+body+'\n'
}

function truthTable (booleanFunction) {

  const name = booleanFunction.name || 'f'
  ,    terms = booleanFunction.length
  ,     args = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, terms).split('');

  let output = args.join(' ') + "\t\t" + name + "(" + args.join(',') + ")\n\n";
  
  for (let i = 0, end = Math.pow(2, terms); i < end; i++) {
    
    let bin = ('0'.repeat(25) + i.toString(2)).slice(-terms).split('')
    ,   ret = +booleanFunction(...bin.map(i => i === '1'));
    
    output += bin.join(' ') + "\t\t" + ret + "\n";
    
  }
  
  return output; 
  
}


// Task 2
function zipWith(fn,a0,a1) {
  return Array.from({length: Math.min(a0.length, a1.length)}, (_, i) => fn(a0[i], a1[i]));
}
function zipWith(f,A=[],B=[]) {
  var smaller = B.length > A.length ? A : B
  return smaller.map( (v,i,RA)=> f(A[i],B[i]) )
}

//Task 3
function findOutlier(int){
  var even = int.filter(a=>a%2===0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}
function even(num){
  return (num % 2 == 0);
}
function odd(num){
  return !even(num)
}

//Task 4
// turn vowels into numbers
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}

const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')


