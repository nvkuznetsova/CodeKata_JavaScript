//////////////////////////////////////////////////////
// Task 1:
// Что выведет console.log ?
//////////////////////////////////////////////////////

function sayHi() {
  console.log(name); //undefined
  console.log(age); // Reference Error
  var name = 'Lydia';
  let age = 21;
}

// sayHi();

//////////////////////////////////////////////////////
// Task 2:
// Что выведет console.log ?
//////////////////////////////////////////////////////

function setTt() {
  const func = function (i) {
    console.log(i);
  };
  for (var i = 0; i < 3; i++) {
    const number = i;
    setTimeout(func.bind(null, i), 1000);
  }
}

// setTt();

//////////////////////////////////////////////////////
// Task 3:
// Что выведет console.log ?
//////////////////////////////////////////////////////

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * 1 * this.radius,
};

// console.log(shape.diameter());
// console.log(shape.perimeter());

//////////////////////////////////////////////////////
// Task 4:
// Что выведет console.log ?
//////////////////////////////////////////////////////

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';

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
  colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
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

const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'), 0);
const baz = () => console.log('Third');

// bar();
// foo();
// baz();

//////////////////////////////////////////////////////
// Task 9:
// Что выведет console.log ?
//////////////////////////////////////////////////////

let newList = [1, 2, 3].push(4);

// console.log(newList);
// console.log(newList.push(5))

//////////////////////////////////////////////////////
// Task 10:
// Что выведет console.log ?
//////////////////////////////////////////////////////

const person = {
  name: 'Lydia',
  age: 21,
};

let city = person.city;
city = 'Amsterdam';

// console.log(city)

//////////////////////////////////////////////////////
// Task 16:
// Написать функцию, которая возвращает n-ную запись в определенной последовательности,
// причем n — число, которое передается в качестве аргумента функции.
//////////////////////////////////////////////////////

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 .....

function fibb(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;

  return fibb(n - 1) + fibb(n - 2);
}

// console.log(fibb());

//////////////////////////////////////////////////////
// Task 17:
// Написать функцию, которая возвращает массив длины n,
// где  каждый элемент представляет собой объект, у которого
// в качестве ключа выступает буква латинского алфавита, начиная с "a",
// а в качестве значения цифра, начиная с единицы.
//////////////////////////////////////////////////////

function hash(n) {
  const output = [];
  let a = 'a'.charCodeAt();
  for (let i = 1; i <= n; i++) {
    output.push({ [String.fromCharCode(a)]: i });
    a++;
  }
  return output;
}

// console.log(hash(12))

//////////////////////////////////////////////////////
// Task 12:
// Необходимо написать функцию, преобразующую
// массив в объект.
// {width: 10, height: 20}
//////////////////////////////////////////////////////

const arr = [
  { name: 'width', value: 10 },
  { name: 'height', value: 20 },
];

const arrToObj = (arr) => {
  const workArr = [...arr];
  return workArr.reduce((acc, el) => {
    acc[el.name] = el.value;
    return acc;
  }, {});
};

// console.log(arrToObj(arr));
