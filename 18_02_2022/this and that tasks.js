function Animal(name, color) {
  this.name = name;

  console.log(this);

  this.color = color;

  console.log(this);
}

var dog = new Animal('Rocky', 'teal');

console.log(dog);

// ---------------------------------------------

function Animal(name, color) {
  this.name = name;
  this.color = color;

  return 'Hello world';
}

var dog = new Animal('Rocky', 'teal');

console.log(dog);

// ---------------------------------------------

function Animal(name, color) {
  this.name = name;
  this.color = color;

  return ['Hello', 'world'];
}

var dog = new Animal('Rocky', 'teal');

console.log(dog);

// ---------------------------------------------

function Animal(name, color) {
  this.name = name;
  this.color = color;

  return {};
}

var dog = new Animal('Rocky', 'teal');

console.log(dog);

// ---------------------------------------------

var call = {
  caller: "Dobkin Arkady",
  says: () => {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

call.says();

// ---------------------------------------------

var call = {
  caller: "Dobkin Arkady",
  says: () => {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

call.says.apply(call);

// ---------------------------------------------

var call = {
  caller: "Rocky",
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

call.says();

// ---------------------------------------------

var call = {
  caller: "Elon Musk",
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

var newCall = call.says;

newCall();

// ---------------------------------------------

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

var call = {
  caller: "Iron Man",
  anotherCaller: anotherCaller,
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

var newCall = call.anotherCaller;

newCall();

// ---------------------------------------------

function tellAboutYourself(age, profession, country) {
  console.log(`Yo, my name is ${this.name}, and my profession is ${profession}.`);
  console.log(`I'm ${age} years old. I live in ${country}.`);
  console.log(`And I'm ${this.isHired ? '' : 'not'} looking for a job.`);
}

var rocky = {
  name: 'Rocky',
  isHired: true,
};

tellAboutYourself.call(rocky, 100, 'Front Dev', 'Zimbabwe');

// ---------------------------------------------

function tellAboutYourself(age, profession, country) {
  console.log(`Yo, my name is ${this.name}, and my profession is ${profession}.`);
  console.log(`I'm ${age} years old. I live in ${country}.`);
  console.log(`And I'm ${this.isHired ? '' : 'not'} looking for a job.`);
}

var rocky = {
  name: 'Rocky',
  isHired: true,
};

var rockyTellsAboutHimself = tellAboutYourself.bind(rocky);

rockyTellsAboutHimself();

// ---------------------------------------------

function sayName() {
  console.log(`Name is: ${this.name}`);
}

sayName();

// ---------------------------------------------
"use strict";

function sayName() {
  console.log(`Name is: ${this.name}`);
}

sayName();

// ---------------------------------------------

function tricky() {
  this.name = 'tricky one';

  const innerOne = () => {
    console.log(this);

    const innerTwo = () => {
      console.log(this);

      const innerThree = () => {
        console.log(this);
      };

      innerThree();
    };

    innerTwo();
  };

  innerOne();
}

tricky();

// ---------------------------------------------

var rocky = {
  name: 'Rocky',
};

function trickyWithRocky() {
  this.name = 'tricky one';

  const innerThree = () => {
    console.log(this);
  };

  const innerTwo = () => {
    console.log(this);

    innerThree();
  };

  const innerOne = () => {
    console.log(this);

    innerTwo();
  };

  innerOne();
}

trickyWithRocky.call(rocky);

// ---------------------------------------------

class Dog {
  constructor(name, job) {
    this.name = name;
    this.job = job;
    this.age = 100;
  }

  displayName() {
    console.log(`Name: ${this.name}`);

    function innerDisplay() {
      console.log(`Job: ${this.job}`);
    }

    innerDisplay();
    innerDisplay.apply(this);
  }
}

var rocky = new Dog('Rocky', 'Frontend Dev');
rocky.displayName();

// ---------------------------------------------

// написать свой bind
