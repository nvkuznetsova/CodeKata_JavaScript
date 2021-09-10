//написать счетчик

// const caunterCreator = () => {
//     let current = 0;
//     return () => {
//         return current += 1;
//     }
// }

// const counter = caunterCreator()
// const counter2 = caunterCreator()
// const counter3=counter
// console.log( counter());
// console.log( counter());
// console.log( counter());
// console.log( counter2());
// console.log( counter3());

// написать счетчик с начальным значением
// const caunterCreator = (inital) => () => inital += 1;


// const counter = caunterCreator(10)
// const counter2 = caunterCreator()
// const counter3=counter
// console.log(counter());//
// console.log(counter());

// объект счетчика

// const caunterCreator = (inital) => () =>({
//     up: ()=>inital+=1,
//     down: ()=>inital-=1,
//     current: ()=>inital,
// });

// const counter=caunterCreator(100)()

// console.log( counter.up() ); // ?
// console.log( counter.up() ); // ?
// console.log( counter.down() ); // ?

// const caunterCreator =function (initail) {
//     let current = initail;
//     this.up=()=>this.current+=1
//     this.down=()=>this.current-=1
// };
// const counter=new caunterCreator(100)
// console.log( counter.up() ); // ?
// console.log( counter.up() ); // ?
// console.log( counter.down() ); // ?

// написать функцию которая работает с двумя окржуениями

// const firstName='Ivan'

// const nameName=()=>{
//     const secondName='Makarov';
//     return ()=>{
//         return `${firstName} and ${secondName}`
//     }
// }
// console.log(nameName()());

// написать функцию умножения multiply(2)(3)->6
// const multiply=(a)=>{
//     return (b)=>{
//         return a*b
//     }
// }
// // console.log(multiply(2)(3));
// const double=multiply(2);
// const triple=multiply(3);

// console.log(double(10));
