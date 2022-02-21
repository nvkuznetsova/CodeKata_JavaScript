// function Animal(name, color) {
//   // this = {};
//   this.name = name;

//   console.log(this); // { name: 'Rocky' }

//   this.color = color;

//   console.log(this); // { name: 'Rocky', color: 'teal }
// }

// var dog = new Animal('Rocky', 'teal');

// console.log(dog); // { name: 'Rocky', color: 'teal }

// function Animal(name, color) {
//   this.name = name;
//   this.color = color;

//   return 'Hello world';
// }

// var dog = new Animal('Rocky', 'teal');

// console.log(dog); // Hello, world / { name: 'Rocky', color: 'teal }

// function Animal(name, color) {
//   this.name = name;
//   this.color = color;

//   return ['Hello', 'world'];
// }

// var dog = new Animal('Rocky', 'teal');

// console.log(dog); // { 0: 'Hello', 1: 'world', length: 2 } / { name: 'Rocky', color: 'teal }

// function Animal(name, color) {
//   this.name = name;
//   this.color = color;

//   return {};
// }

// var dog = new Animal('Rocky', 'teal');

// console.log(dog); // {}

// var call = {
//   caller: "Dobkin Arkady",
//   says: () => {
//     console.log(`Hey, ${this.caller} just called.`); // 'Dobkin Arkady' / undefined
//   }
// };

// call.says(); // call-site

// var call = {
//   caller: "Dobkin Arkady",
//   says: () => {
//     console.log(`Hey, ${this.caller} just called.`); // 'Dobkin Arkady' / undefined
//   }
// };

// call.says.apply(call);

// var call = {
//   caller: "Rocky",
//   says: function () {
//     console.log(`Hey, ${this.caller} just called.`);
//   }
// };

// call.says();

// var call = {
//   caller: "Elon Musk",
//   says: function () {
//     console.log(`Hey, ${this.caller} just called.`);
//   }
// };

// var newCall = call.says;

// newCall();

// function anotherCaller() {
//   console.log(`${this.caller} called, too!`);
// }

// var call = {
//   caller: "Iron Man",
//   anotherCaller: anotherCaller,
//   says: function () {
//     console.log(`Hey, ${this.caller} just called.`);
//   }
// };

// var newCall = call.anotherCaller;

// newCall(); // undefined called, too!

// function tellAboutYourself(age, profession, country) {
//   console.log(`Yo, my name is ${this.name}, and my profession is ${profession}.`);
//   console.log(`I'm ${age} years old. I live in ${country}.`);
//   console.log(`And I'm ${this.isHired ? '' : 'not'} looking for a job.`);
// }

// var rocky = {
//   name: 'Rocky',
//   isHired: true,
// };

// tellAboutYourself.call(rocky, 100, 'Front Dev', 'Zimbabwe');
// // no undefined

// function tellAboutYourself(age, profession, country) {
//   console.log(`Yo, my name is ${this.name}, and my profession is ${profession}.`);
//   console.log(`I'm ${age} years old. I live in ${country}.`);
//   console.log(`And I'm ${this.isHired ? '' : 'not'} looking for a job.`);
// }

// var rocky = {
//   name: 'Rocky',
//   isHired: true,
// };

// var rockyTellsAboutHimself = tellAboutYourself.bind(rocky, 10);

// rockyTellsAboutHimself('driver', 'Russia');

// function sayName() {
//   console.log(`Name is: ${this.name}`);
// }

// sayName(); // undefined

// "use strict";

// function sayName() {
//   console.log(`Name is: ${this.name}`);
// }

// sayName();

// function tricky() {
//   this.name = 'tricky one';

//   const innerOne = () => {
//     console.log(this);

//     const innerTwo = () => {
//       console.log(this);

//       const innerThree = () => {
//         console.log(this);
//       };

//       innerThree();
//     };

//     innerTwo();
//   };

//   innerOne();
// }

// tricky(); // global, global, global aka { name: 'tricky one' } / global

// var rocky = {
//   name: 'Rocky',
// };

// function trickyWithRocky() {
//   this.name = 'tricky one';

//   const innerThree = () => {
//     console.log(this);
//   };

//   const innerTwo = () => {
//     console.log(this);

//     innerThree();
//   };

//   const innerOne = () => {
//     console.log(this);

//     innerTwo();
//   };

//   innerOne();
// }

// trickyWithRocky.call(rocky); // { name: 'tricky one' } /

class Dog {
  constructor(name, job) {
    // this = {};
    this.name = name;
    this.job = job;
    this.age = 100;
    // { name job age}
  }

  displayName() {
    console.log(`Name: ${this.name}`);

    function innerDisplay() {
      console.log(`Job: ${this.job}`);
    }

    // innerDisplay(); // call-site
    innerDisplay.apply(this); // call-site
  }
}

var rocky = new Dog('Rocky', 'Frontend Dev');

rocky.displayName(); // Rocky, Frontend Dev, Frontend Dev / Rocky, undefined, Frontend Dev