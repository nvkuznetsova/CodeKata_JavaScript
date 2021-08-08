// const str = ('str').toUppercase();

// const person = {
//     name: "Иван",
//     sayHi() {
//         console.log('Привет');
//     }
// }

// const anotherPerson = Object.create(null);

// anotherPerson.name = 'John';
// console.log(anotherPerson);

// let prop = 'age';

// anotherPerson[prop]


// CONSTRUCTORS

// { name: '...', sayHi: () => {} }

// function CharacterCreator(name) {
//     const newCharacter = {};
//     newCharacter.name = name;
//     newCharacter.sayHi = function() {
//         console.log(`${name} says Hi!`);
//     }
//     return newCharacter;
// }

// const winnieThePooh = CharacterCreator('Winnie');
// winnieThePooh.sayHi();

// function CharacterCreator(name) {
//     this.name = name;
// }

// CharacterCreator.prototype.sayHi = function() {
//     console.log(`${this.name} says Hi!`);
// }

// const winnieThePooh = new CharacterCreator('Winnie');
// winnieThePooh.sayHi();

// const piglet = new CharacterCreator('Piglet');
// const christopher = new CharacterCreator('Chris');
// piglet.sayHi();

// console.log(christopher.hasOwnProperty('sayHi'));


// function Human(options) {
//     this.name = options.name;
// }

// Human.prototype.walk = function() {
//     console.log(this.name + ' walks');
// }

// Athlete.prototype = Object.create(Human.prototype);
// Athlete.prototype.constructor = Athlete;

// function Athlete(options) {
//     Human.call(this, options);
//     this.discipline = options.discipline;
// }

// const person = new Human({ name: 'Usain Bolt'});
// const athlete = new Athlete({ name: 'Vanya Petrov'});

// person.walk();

// Athlete.prototype.walk = function() {
//     Human.prototype.walk.call(this);
//     console.log('and runs very fast');
// }

// athlete.walk();

// CLASSES

// class Human {
//     constructor(options) {
//         this.name = options.name;
//     }

//     walk() {
//         console.log(this.name + ' walks');
//     }
// }

// class Athlete extends Human {
//     constructor(options) {
//         super(options);

//         this.discipline = options.discipline;
//     }

//     walk() {
//         super.walk();
//         console.log(`and is good at ${this.discipline}`);
//     }
// }

// const person = new Human({ name: 'Usain Bolt'});
// const athlete = new Athlete({ name: 'Vanya Petrov', discipline: 'swimming'});

// person.walk();
// athlete.walk();

// FUNCTIONAL INHERITANCE

// function Human(options) {
//     this.name = options.name;
//     this.walk = function() {
//         console.log(this.name + ' walks');
//     }
// }

// function Athlete(options) {
//     Human.call(this, options);
//     this.discipline = options.discipline;

//     var stroll = this.walk;
//     this.walk = function() {
//         stroll.call(this);
//         console.log(`and is good at ${this.discipline}`);
//     }
// }

// const person = new Human({ name: 'Usain Bolt'});
// const athlete = new Athlete({ name: 'Vanya Petrov', discipline: 'swimming'});

// person.walk();
// athlete.walk();


