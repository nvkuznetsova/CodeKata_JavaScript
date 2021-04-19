// console.log('start')
// // 0
// // write a function that swaps value

// let value1='value1'
// let value2=2

// const swap=(el1, el2)=>{
//     [el1, el2] = [el2, el1];
// }

// console.log('value1', value1)
// console.log('value2', value2)

// swap(value1, value2)

// console.log('value1', value1)
// console.log('value2', value2)

// 01
// write function that returns coomon array from to given 2

// const sumArray=(ar1, ar2)=>{
//     let ar=[];
//     ar.push(ar1, ar2)
//     return ar
// }
// // const sumArray=(ar1, ar2)=>{
// //     return [...ar1, ...ar2]
// // }
// console.log(sumArray([1,2],[3,4]))


// // 1
// // Write 2 functions
// // 1st transforms string to array
// // 2nd transfroms array to string

const array1=['a', 'b', 'c']
// const arrayToString=(array)=>{
//     return array.join('')
// }

// const string1='abc'
// const stringToArray=(string)=>{
//     return string.split('')
// }
// console.log(arrayToString(array1))
// console.log(stringToArray(string1))

// //2
// // Write a function that reverses array without using `revese` method

const array2=[{a:1}, {b:2}, {c:3}]

// // const customReverse=(array)=>{
// //     let result=[]
// //     for(let i=array.length-1; i>=0; i--){
// //         result.push(array[i])
// //     }
// //     return result;
// // }

function customReverse(array){
 return this.map((el, id, givenArr) => givenArr[givenArr.length - id - 1]);
}
Array.prototype.myReverse=customReverse
console.log(array2.myReverse())


//3
// Write a function that checks equality of two arrays of numbers or strings

// const array3=[...array1]
// const array4=[...array3, 'a']
// console.log('array3',array3);
// console.log('array1',array1);
// console.log('array4',array4);

// const isEqual =(array1, array2)=>(array1.length===array2.length && array1.filter((el, id)=>el===array2[id]).length===array1.length)

// console.log('should return true', isEqual(array3, array1))
// console.log('should return false', isEqual(array3, array4))

// 4
// write function that returns array without nth element

const array4=[1,2,3,4,5]

// const deleteEveryCurtainElement=(array, n)=>{
//     return array.filter(el=>el!==n)
// }
const deleteEveryCurtainElement=(array, n)=>{
    return array.filter((el, id)=> id%n===0)
}


console.log(deleteEveryCurtainElement(array4, 3))
//5
// Write a function that terutn object where key is an element, value is number of times of this element in a array
// i.e. [1, 2, 2, 3, 'EU', 'EU'] -> {'1':1, '2':2, '3':1, 'EU':2}
const array5=[1, 2, 3, 'EU', 'EU', 2]

// const hashMaker=(array=array5)=>{
//     let result={};
//     for(let i=0; i<array.length; i++){
//         let temp=array[i];

//         //oprion 1
//         // if(result.hasOwnProperty(temp)){
//         //     result[temp]+=1;
//         // }else{
//         //     result[temp]=1
//         // }


//         //oprion2
//         // result.hasOwnProperty(temp)?result[temp]+=1:result[temp]=1

//         // option3
//         result[temp]=(result[temp]||0)+1;
//     }
//     return result;
// }
// const hashMaker=(array=array5)=>{
//     return array.reduce((acc, current)=>{
//     acc[current]=(acc[current]||0)+1
//     return acc
// }, {})}
// console.log(hashMaker());