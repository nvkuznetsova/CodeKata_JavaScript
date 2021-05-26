function Hero(name) {
  this.name = name;
}

Hero.prototype.sayHi = function () {
  console.log(`Hi! My name is ${this.name}`)
}

const hero = new Hero('Iana');

hero.sayHi();

console.log(hero.hasOwnProperty('sayHi'))

function Wizard(name, mana) {
  Hero.call(this, name);
  this.mana = mana;
}

Wizard.prototype = Object.create(Hero.prototype);

Wizard.prototype.constructor = Wizard;

Wizard.prototype.sayHi = function () {
  Hero.prototype.sayHi.call(this);
  console.log(`And I have ${this.mana} mana points`)
}

const wizard = new Wizard('Kseniia', 9000);

wizard.sayHi()
