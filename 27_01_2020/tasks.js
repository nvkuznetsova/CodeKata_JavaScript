//////////////////////////////////////////////////////
// Task 1:
// Что выведет console.log ?
//////////////////////////////////////////////////////

function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

// sayHi();


//////////////////////////////////////////////////////
// Task 2:
// Что выведет console.log ?
//////////////////////////////////////////////////////

for (var i = 0; i < 3; i++) {
  var func = function(j) {
    console.log(j)
  }
  setTimeout(func.bind(this, i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}


//////////////////////////////////////////////////////
// Task 3:
// Что выведет console.log ?
//////////////////////////////////////////////////////

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

// console.log(shape.diameter());
// console.log(shape.perimeter());


//////////////////////////////////////////////////////
// Task 4:
// Что выведет console.log ?
//////////////////////////////////////////////////////

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
// console.log(d.greeting);


//////////////////////////////////////////////////////
// Task 5:
// Что выведет console.log ?
//////////////////////////////////////////////////////

let a = 3;
let b = new Number(3);
var c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);
  

//////////////////////////////////////////////////////
// Task 6:
// Что выведет console.log ?
//////////////////////////////////////////////////////

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

// const freddie = new Chameleon({ newColor: "purple" });
// console.log(freddie);
// console.log(freddie.colorChange("orange"));

// const cham = new Chameleon();
// console.log(cham);


//////////////////////////////////////////////////////
// Task 7:
// Что выведет console.log ?
//////////////////////////////////////////////////////

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

// bar();
// foo();
// baz();


//////////////////////////////////////////////////////
// Task 8:
// Что выведет console.log ?
//////////////////////////////////////////////////////

let result = [1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});

// console.log(result);


//////////////////////////////////////////////////////
// Task 9:
// Что выведет console.log ?
//////////////////////////////////////////////////////

let newList = [1, 2, 3].push(4)

// console.log(newList.push(5))


//////////////////////////////////////////////////////
// Task 10:
// Что выведет console.log ?
//////////////////////////////////////////////////////

const person = {
  name: "Lydia",
  age: 21
}

let city = person.city
city = "Amsterdam"

// console.log(city)


//////////////////////////////////////////////////////
// Task 12:
// Необходимо написать функцию, преобразующую 
// массив в объект.
// {width: 10, height: 20}
//////////////////////////////////////////////////////

const arr = [
 {name: 'width', value: 10}, 
 {name: 'height', value: 20}
]

const arrToObj = (arr) => {
  return arr.reduce((obj, item) => {
    return { ...obj, [item.name]: item.value };
  }, {});
}

// console.log(arrToObj(arr));


//////////////////////////////////////////////////////
// Task 13:
// Написать функцию, проверяющую строку на палиндром
//////////////////////////////////////////////////////

function formatString(str) {
  return str.replace(/\s/g, '').toLowerCase();
}

function isPolyndrom(str) {
  return formatString(str) === formatString(str).split('').reverse().join('');
}

// console.log(isPolyndrom('А роза упала на лапу Азора'));


//////////////////////////////////////////////////////
// Task 15:
// Требуется написать функцию, выводящую в консоль числа от 1 до n
// где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
//////////////////////////////////////////////////////

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let result = (i % 3 === 0 && i % 5 === 0) ? 'fizzbuzz'
            : (i % 5 === 0) ? 'buzz'
            : (i % 3 === 0) ? 'fizz' : i;
    console.log(result);
  }
}

// fizzBuzz(15) // -> [1, 2, 'fizz', 4, 'buzz']


//////////////////////////////////////////////////////
// Task 16:
// Написать функцию, которая возвращает n-ную запись в определенной последовательности, 
// причем n — число, которое передается в качестве аргумента функции.
//////////////////////////////////////////////////////

function fibb(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return fibb(n-1) + fibb(n-2);
}

// console.log(fibb(5)) // -> 5
// console.log(fibb(6)) // -> 8


//////////////////////////////////////////////////////
// Task 17:
// Написать функцию, которая возвращает массив длины n,
// где  каждый элемент представляет собой объект, у которого
// в качестве ключа выступает буква латинского алфавита, начиная с "a",
// а в качестве значения цифра, начиная с единицы.
//////////////////////////////////////////////////////


function hash(n) {
  const a = 'a'.charCodeAt()-1;
  const res = [];
  for (let i = 1; i <=n; i++) {
    res.push({[String.fromCharCode(a+i)]: i});
  }
  return res;
}

// console.log(hash(30)) // -> [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }]