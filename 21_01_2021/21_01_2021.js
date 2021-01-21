//===============================
// 1 write function that returns array pyramid
// e.g. pyramid(4)-> 
// [
//     [1],
//     [1, 1],
//     [1, 1, 1],
//     [1, 1, 1, 1],
// ]

// const pyramid=(n)=>{
//   let result=[];
//   for( let i=1; i<=n;i++){
//     result.push(Array(i).fill(1))
//   }
//   return result
// }


// const pyramid=n=>{
//   return Array(n).fill('0').map((_, id)=> Array(id+1).fill('1'))
// }
// console.log('pyramid(n)', pyramid(12));

//===============================
//2  write function that returns array with shorted names and father's names
//e.g. 
// const people = [
//   'Павлов Чарльз Романович',
//   'Борисов Семён Вадимович',
//   'Колесник Жерар Леонидович',
//   'Савин Зиновий Григорьевич',
//   'Тарасюк Ждан Виталиевич',
//   'Чумак Захар Григорьевич',
//   'Осипов Елисей Борисович',
// ];

// const expectedResult = [
//   'Павлов Ч.Р.',
//   'Борисов С.В.',
//   'Колесник Ж.Л.',
//   'Савин З.Г.',
//   'Тарасюк Ж.В.',
//   'Чумак З.Г.',
//   'Осипов Е.Б.',
// ];

// const shorter=(arrayOfNames)=>{
//   return arrayOfNames.map(el=>{
//     let namesList=el.split(' ').map((name, id)=>{
//       if(id!==0){
//         return `${name[0]}.`
//       } else {
//         return `${name} `
//       }
//     }).join('')
//     return namesList
//   })
// }
// console.log(shorter(people))

//===============================
//3 write function that returns object with amount of positive and negative numbers and zeros
//e.g. 
// const integers = [-4, -2, 4, 1, 67, -43, 82, -9, -2, 23, -4, 0];
// expected result = {
//   positive: 5,
//   negative: 6,
//   zeros: 0,
// } 

// const reducer=(array)=>{
//   return array.reduce((result, el)=>{
//     if(el>0) {
//       result['positive']=result['positive']+1;
//     } else if (el<0) {
//       result['negative']=result['negative']+1;
//     } else{
//       result['zeros']=result['zeros']+1;
//     }
//     return result
//   }, {
//       positive: 0,
//       negative: 0,
//       zeros: 0,
//   })
// }
// console.log(reducer(integers))
//===============================
//4 write function that returns array where next element is sum of previous
//e.g. 
// getSum([5, 8, 24]) -> [5, 5+8, 5+8+24] -> [5, 13, 37]

// const getSum=(array)=>{
//   let sum=0
//   return array.map((el, id)=>{
//     sum+=el
//     return sum
//   })
// }

// const getSum=(array)=>{
//   let result=[]
//   array.reduce((prev, el)=>{
//     prev+=el
//     result.push(prev)
//     return prev
//   },0)
//   return result
// }
// console.log(getSum([5, 8, 24]));

//===============================
//5 write function that returns array of Fibonacci numbers
//e.g. 
// fibonacci(6)->[0,1,1,2,3,5]
// fibonacci(8)->[0,1,1,2,3,5,8,13] 
// C(i)=C(i-1)+C(i-2)
// const fibonacci=(n)=>{
// const fibonacci=(n)=>{
//   let result=[]
//   Array(n).fill(0).forEach((el, id)=>{
//     if(id<2){
//       result.push( id)
//     } else{
//       result.push(result[id-1]+result[id-2])
//     }
//   })
//   return result
// }

// console.log([0,1,1,2,3,5,8,13].reduce((acc, el, id)=>{acc[id]=el; return acc}, {}))

// const fibonacci = n => {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n-1) + fibonacci(n-2);
//   }
// }

// const fib = (n) => {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(fibonacci(i));
//   }
//   return arr;
// }

// console.log(fib(7));


