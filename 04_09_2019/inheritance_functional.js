// Another Anagram
const isAnagram = (str1, str2) => {
    str1 = str1.toUpperCase().split('').sort().join('');
    str2 = str2.toUpperCase().split('').sort().join('');
    return str1 === str2;
  }
  
  // Functional
  function Hero(name) {
    this.name = name; // this === Hero
    var hp = 100;
    
    this.sayHi = function() {
      console.log('Hi! I`m '+ this.name);
    }
    
    this.drinkHpPotion = function() {
      hp +=50;
      speak();
    }
    
    this.heroCard = function() {
      console.log('Name: ' + this.name + '; HP: '+ hp);
    }
    
    var speak = function() {
      console.log('Feel better now!');
    }
  }
  
  function Wizard(name, mana) {
    Hero.call(this, name); // this === Wizard
    this.mana = mana;
    
    this.drinkManaPotion = function() {
      this.mana +=100;
    }
    
    var card = this.heroCard;
    this.heroCard = function() {
      card.call(this);
      console.log('Mana: '+ this.mana);
    }
  }
  
  function Knight(name, strength, equipment) {
    Hero.call(this, name); // this === Knight
    var strength = strength;
    this.equipment = equipment;
    
    var card = this.heroCard;
    this.heroCard = function() {
      card.call(this);
      console.log('Strength: '+ strength + '; Equipment: '+ this.equipment);
    }
    
    this.drinkStrengthPotion = function() {
      strength +=50;
      speak();
    }
    
    this.changeEquipment = function(equipment) {
      this.equipment = equipment;
    }
    
    var speak = function() {
      console.log('Feel much better!');
    }
  }
  
  var wizard = new Wizard('Gandalf', 1000);
  var knight = new Knight('Vasya', 500, 'sword');
  var e = knight.equipment;
  var s = knight.strength;
  console.log(e + ' ' + s); // 'sword undefined'

  