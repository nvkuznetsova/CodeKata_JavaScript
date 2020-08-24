// Let's write our own implementation of the 'new' keyword:

const cat1 = Object.create(null);

cat1.name = 'Barsik';

function catConstructor(name) {
  const newCat = Object.create(catMethodStorage);
  newCat.name = name;

  return newCat;
}

const catMethodStorage = {
  catchMice: function () {
    console.log('Cat caught a mouse!');
  },
};

const cat2 = catConstructor('Murzik');

//Prototypal Inheritance

const Animal = function (options) {
  this.name = options.name;
  this.sound = options.sound;
};

Animal.prototype.voice = function () {
  console.log(`${this.name} goes ${this.sound}`);
};

const duck = new Animal({ name: 'duck', sound: 'squak' });
const fish = new Animal({ name: 'fish', sound: 'blub' });

console.log(duck.hasOwnProperty('voice')); //false

const Seal = function (options) {
  Animal.call(this, options);
  this.isChubbyBoi = true;
};

Seal.prototype = Object.create(Animal.prototype);
Seal.prototype.constructor = Seal;

Seal.prototype.voice = function () {
  Animal.prototype.voice.apply(this);
  console.log(
    `but there's one sound that no one knows.. what does the fox say? :3`
  );
};

const seal = new Seal({ name: 'seal', sound: 'ow ow ow' });

//Functional Inheritance
const Animal2 = function (options) {
  this.name = options.name;
  this.sound = options.sound;
  this.voice = function () {
    console.log(`${this.name} goes ${this.sound}`);
  };
};

duck2 = new Animal2({ name: 'duck', sound: 'squak' });

const Seal2 = function (options) {
  Animal2.apply(this, [options]);
  this.isChubbyBoi = true;
  const greeting = this.voice;
  this.voice = function () {
    greeting.call(this);
    console.log(
      `but there's one sound that no one knows.. what does the fox say? :3`
    );
  };
};

const seal2 = new Seal2({ name: 'seal', sound: 'ow ow ow' });

//Class Inheritance

class Animal1 {
  constructor(options) {
    this.name = options.name;
    this.sound = options.sound;
  }
  voice() {
    console.log(`${this.name} goes ${this.sound}`);
  }
}

const duck1 = new Animal1({ name: 'duck', sound: 'squak' });
const fish1 = new Animal1({ name: 'fish', sound: 'blub' });

class Seal1 extends Animal1 {
  constructor(options) {
    super(options);
    this.isChubbyBoi = true;
  }
  voice() {
    super.voice();
    console.log(
      `but there's one sound that no one knows.. what does the fox say? :3`
    );
  }
}

const seal1 = new Seal1({ name: 'seal', sound: 'ow ow ow' });
