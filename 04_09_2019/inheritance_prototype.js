// Prototype
function Hero(name) {
    this.name = name; // this === Hero
    this.hp = 100; 
  }
  
  Hero.prototype.drinkHpPotion = function() {
    this.hp +=50;
  }
  
  Hero.prototype.sayHi = function() {
     console.log('Hi! I`m ' + this.name);
  }
  
  Hero.prototype.heroCard = function() {
     console.log('Name: ' + this.name + '; HP: '+ this.hp);
  }
  
  function Wizard(name, mana) {
    Hero.call(this, name); // this === Wizard
    this.mana = mana;
  }
  
  Wizard.prototype = Object.create(Hero.prototype);
  Wizard.prototype.constructor = Wizard;
  
  Wizard.prototype.drinkManaPotion = function() {
    this.mana +=100;
  }
  
  Wizard.prototype.heroCard = function() {
    Hero.prototype.heroCard.call(this);
    console.log('Mana: '+ this.mana);
  }
  
  function Knight(name, strength, equipment) {
    Hero.call(this, name); // this === Knight
    this.strength = strength;
    this.equipment = equipment;
  }
  
  Knight.prototype = Object.create(Hero.prototype);
  Knight.prototype.constructor = Knight;
  
  Knight.prototype.drinkStrengthPotion = function() {
    this.strength +=50;
  }
  
  Knight.prototype.changeEquipment = function(equipment) {
    this.equipment = equipment;
  }
  
  Knight.prototype.heroCard = function() {
    Hero.prototype.heroCard.call(this);
    console.log('Strength: '+ this.strength + '; Equipment: '+ this.equipment);
  }
  
  var wizard = new Wizard('Gandalf', 1000);
  var knight = new Knight('Vasya', 500, 'sword');
  var e = knight.equipment;
  var s = knight.strength;
  console.log(e + ' ' + s); // 'sword 500'