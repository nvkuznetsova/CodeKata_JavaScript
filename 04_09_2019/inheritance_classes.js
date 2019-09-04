// Class
class Hero {
    constructor(name) {
      this.name = name;
      this.hp = 100;
    }
    
    sayHi() {
      console.log(`Hi! I\`m ${this.name}`);
    }
    
    drinkHpPotion() {
      this.hp +=50;
    }
    
    heroCard() {
      console.log('Name: ' + this.name + '; HP: '+ this.hp);
    }
  }
  
  class Wizard extends Hero {
    constructor(name, mana) {
      super(name);
      this.mana = mana;
    }
    
    drinkManaPotion() {
      this.mana +=100;
    }
    
    heroCard() {
      super.heroCard();
      console.log('Mana: '+ this.mana);
    }
  }
  
  class Knight extends Hero {
    constructor(name, strength, equipment) {
      super(name);
      this.strength = strength;
      this.equipment = equipment;
    }
    
    drinkStrengthPotion() {
      this.strength +=50;
    }
    
    changeEquipment(equipment) {
      this.equipment = equipment;
    }
    
    heroCard() {
      super.heroCard();
      console.log('Strength: '+ this.strength + '; Equipment: '+ this.equipment);
    }
  }
  
  let wizard = new Wizard('Gandalf', 1000);
  let knight = new Knight('Vasya', 500, 'sword');
  wizard.sayHi();
  wizard.drinkHpPotion();
  wizard.drinkManaPotion();
  wizard.heroCard();
  knight.sayHi();
  knight.drinkHpPotion();
  knight.drinkStrengthPotion();
  knight.changeEquipment('spear');
  knight.heroCard();