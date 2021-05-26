class Hero {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi! My name is ${this.name}`)
  }
}

const hero = new Hero('Iana');

hero.sayHi();

class Wizard extends Hero {
  constructor(name, mana) {
    super(name);
    this.mana = mana;
  }

  sayHi() {
    super.sayHi();
    console.log(`And I have ${this.mana} mana points`)
  }
}

const wizard = new Wizard('Kseniia', 9000);

wizard.sayHi()
