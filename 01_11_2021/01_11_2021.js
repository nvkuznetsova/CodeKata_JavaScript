// Task 1
{
    // Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

    // function moveZeros(arr){
    //     let countZeros = 0;
    //     const newArr = arr.filter((item)=>{
    //         if (item === 0){
    //             countZeros +=1;
    //             return false
    //         }
    //         return true
    //     })
    //     const arrZero = new Array(countZeros).fill(0);
    //     return [...newArr, ...arrZero]
    // }
    // function moveZeros(arr){
    //     const newArr = arr.filter(item => item !== 0);
    //     const countZero = arr.length - newArr.length;
    //     const arrZero = new Array(countZero).fill(0);
    //     return [...newArr, ...arrZero]
    // }


    //CHECK 
    // console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]
}

// Task 2
{
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

    // function abbrevName(name){
    //     const arr = name.split(' ');
    //     return (arr[0][0]+"."+arr[1][0]).toUpperCase()
    // }

    // function abbrevName(name){
    //     return name.split(' ').map(item=>item[0].toUpperCase()).join('.')
    // }


    // CHECK 
    // console.log(abbrevName('Sandy Hay')); //S.H
    // console.log(abbrevName('mary kay')); //M.K

    {
    // how we can brack it?
    }
}

// Task 3
{
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

//example
// minimumSteps([1, 10, 12, 9, 2, 3], 6)  ==>  return (2)
// minimumSteps([8, 9, 4, 2], 23)  ==> return (3)
// minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)  ==>  return (8)
//  function minimumSteps(arr, num){
//     let step = 0;
//     const res = arr.sort((a,b)=>a-b).reduce((sum, item)=>{
        
//         if(sum < num) {
//             step += 1;
//         }
//         return sum  = sum + item
//     })
//     return step;
//  }

// const minimumSteps = (numbers, value) => {
//     let sum = 0
//     return numbers.sort((a, b) => a - b).findIndex(number => (sum += number) >= value)
// }



//CHECK
// console.log(minimumSteps([1, 10, 12, 9, 2, 3], 6))  //2
// console.log(minimumSteps([8, 9, 4, 2], 23))  //3
// console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464))  //8
}

// Task 4
{
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// function binaryArrayToNumber (arr) {
//     //return parseInt(arr.join(''), 2)
//     return arr.reverse().reduce((res, item, index)=> {
//         return res + item*Math.pow(2, index);
//     }, 0)
// };

// CHECK
//   console.log(binaryArrayToNumber([0,0,1,0])); //2
//   console.log(binaryArrayToNumber([1,1,1,1])); //15
}

//Task 5
{
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.
// function findUniq(arr) {
//     const newSet = [...new Set(arr)];
//     console.log(newSet);
//     return (arr.filter(item => item === newSet[0]).length === 1)?newSet[0]:newSet[1];
// }
// function findUniq(arr) {
//     let newArr = arr.sort((a,b)=>a-b)
//     return newArr[0]===newArr[1]? newArr[arr.length-1] : newArr[0]
// }

//CHECK
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); //2
// console.log(findUniq([0, 0, 0.55, 0, 0])); //0.55
}

// Task HOME
{           
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
// 
//                1
//             3     5
//          7     9    11
//       13    15    17    19
//   21     23    25    27    29



    function rowSumOddNumbers(n) {
        // TODO
    }


    //CHECK
    //console.log(rowSumOddNumbers(1)); //1 
    //console.log(rowSumOddNumbers(2)); //8
    //console.log(rowSumOddNumbers(47)); //74088
}

//ANSWERS
//TASK 2
function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function abbrevName(name){

  return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}



//TASK 3

const minimumSteps = (numbers, value) => {
    let sum = 0
    return numbers.sort((a, b) => a - b).findIndex(number => (sum += number) >= value)
}


function minimumSteps(numbers, value){
    const sortedArr = numbers.sort((a,b)=>a-b)
    let step = 0;
    sortedArr.reduce((acc,item) =>{
      if (acc<value){
        step += 1
      }
      return acc = acc + item
    })
    return step
}

function minimumSteps(numbers, value) {
    const nums = numbers.slice().sort((a, b) => a - b);
    for (let i = 0, sum = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum >= value) {
        return i;
      }
    }
  }

function minimumSteps(numbers, value){
    let min = numbers.sort((a, b) => a - b);
    let i = 0;
    let result = min[i];
    
    while ( result < value ) {
      result += min[++i];
    }
    
    return i;
  }

// Task 4
const binaryArrayToNumber = arr => {
  const arrLength = arr.length-1;
  return arr.reduce((acc, num, index)=>{
    return acc+ num*Math.pow(2, (arrLength-index))
  }, 0)
};

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);


// Task 5
function findUniq(arr) {
  let newArr = arr.sort((a,b)=>a-b)
  return newArr[0]===newArr[1]? newArr[arr.length-1] : newArr[0] 
}


  
