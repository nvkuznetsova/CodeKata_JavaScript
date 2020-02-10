function Animal(doesFly) {
  this.doesFly = doesFly;
  this.doesBreeding = true;
  this.doesMovement = true;
}

Animal.prototype.eat = function() {
  return "animal eats";
};

function Predator(doesFly) {
  Predator.prototype.constructor.call(this, doesFly);
  this.hasFang = true;
  this.typeOfFood = "meat";
}

Predator.prototype = Object.create(Animal.prototype);
Predator.prototype.constructor = Predator;
Predator.prototype.stalk = function() {
  return "animal stalks";
};
