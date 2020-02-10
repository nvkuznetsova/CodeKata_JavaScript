class Animal {
  constructor(doesFly) {
    this.doesFly = doesFly;
    this.doesBreeding = true;
    this.doesMovement = true;
  }

  eat() {
    return "animal eats";
  }
}

class Predator extends Animal {
  constructor(doesFly) {
    super(doesFly);
    this.hasFang = true;
    this.typeOfFood = "meat";
  }

  stalk() {
    return "animal stalks";
  }
}
