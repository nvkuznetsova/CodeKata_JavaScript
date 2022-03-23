// codepen: https://codepen.io/nvkuznetsova/pen/MWrygqY

// classes
class Hero {
  #private;
  constructor(name) {
    this.name = name;
    this.hp = 100;
    this.#private = 100;
  }

  showCard() {
    console.log(`My name is: ${this.name}`);
    console.log(`HP: ${this.hp}`);
  }

  drinkHpPotion(hp) {
    this.hp += hp;
  }
}

class Wizard extends Hero {
  constructor(name, mana) {
    super(name);
    this.mana = mana;
  }

  showCard() {
    super.showCard();
    console.log(`Mana: ${this.mana}`);
  }

  drinkManaPotion(mana) {
    this.mana += mana;
  }
}

class Knight extends Hero {
  constructor(name, strength, equipment) {
    super(name);
    this.strength = strength;
    this.equipment = equipment;
  }

  showCard() {
    super.showCard();
    console.log(`Strength: ${this.strength}`);
    console.log(`Equipment: ${this.equipment}`);
  }

  drinkStrengthPotion() {
    this.strength += 50;
  }

  changeEquipment(equipment) {
    this.equipment = equipment;
  }
}

const wizard = new Wizard('Gandalf', 2000);
wizard.drinkHpPotion(1000);
// wizard.showCard();

const knight = new Knight('Vasya', 100, 'shovel');
knight.drinkStrengthPotion();
knight.changeEquipment('gun');
//knight.showCard();




// prototypes
function Hero1(name, hp) {
  this.name = name;
  this.hp = hp;
}

Hero1.prototype.showCard = function () {
  console.log(`My name is: ${this.name}`);
  console.log(`HP: ${this.hp}`);
}
Hero1.prototype.drinkHpPotion = function (hp) {
  this.hp += hp;
}

function Wizard1(name, hp, mana) {
  Hero1.call(this, name, hp);
  this.mana = mana;
}

Wizard1.prototype = Object.create(Hero1.prototype);
Wizard1.prototype.constructor = Wizard1;

Wizard1.prototype.drinkManaPotion = function (mana) {
  this.mana += mana;
}
Wizard1.prototype.showCard = function () {
  Hero1.prototype.showCard.call(this);
  console.log(`Mana: ${this.mana}`);
}

const wizard1 = new Wizard('Gandalf the Gray', 200);
wizard1.drinkHpPotion(100);
//wizard1.showCard();


// funtions
function Hero1(name, hp) {
  this.name = name;
  var hp = hp;

  this.showCard = function () {
    console.log(`My name is: ${this.name}`);
    console.log(`HP: ${this.hp}`);
  }
}