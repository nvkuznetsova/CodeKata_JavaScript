// #1. Lost number in number sequence

let arr1 = [1,2,3,4,5,6,7,8,9]
let arr2 = [3,2,4,6,7,8,1,9]

const findNumber = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
  const sortArr2 = arr2.sort();
	let result;



	}
}

const findNumber2 = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return arr1[i];
    }
  }
  return null;
}  

findNumber2(arr1, arr2);

// #2. Reduce implementation

Array.prototype.reduce2 = function (func, result) {
  let array = this;
  let startIndex = result ? 0 : 1;
  result = result || array[0];
  
  for(let i = startIndex; i < array.length; i++) {
    result = func(result, array[i], i, array);
  }

  return result;
}


// #3. move Zeros to the end

let arr3 = [false, 1, 0, 1, 2, 0, 1, 3, "a"]
output [false, 1, 1, 2, 1, 3, "a", 0, 0]



const moveZeros =(arr)=> {
  let arrNew = arr.slice().filter((item)=> item!==0);
  let numZeros = arr.length - arrNew.length;
  for (let i=numZeros; i>0; i--) {
    arrNew.push(0);
  }
  return arrNew
}


let moveZeros = (arr) => {
  arr.reduceRight((acc, item) => item === 0 ? [...acc, item] : [item, ...acc] 
  , [])
}
[1, 3, 'a', 0]
moveZeros(arr3)

// #4.   flat array with arrays in simple array
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
]

// output [0, 1, 2, 3 , 4 ,5]
//
function flat(array) {
  let result = [];

  for(let i = 0; i < array.length; i++) {
    result = [...result, ...array[i]];
  }

  return result;
}

flat(flattened);

const flat2 = (arr) => {
  let newArr = arr.join(',');
  return newArr.split(',');
}

flat2(flattened)

//5 Raid boss


// input (array with strings)
const words = ['apple', 'orange', 'banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'banana' ];

// output => ['banana', 'banana', 'banana', 'banana', 'grapefruit', 'grapefruit', // 'orange', 'orange', 'apple' ] O(n)


// Отсортировать по количеству вхождений в массив строк(на первом месте строки с самым большим количсетвом вхождений в массив), если количсетво одинаковое тогда по алфавиту начиная с первой буквы