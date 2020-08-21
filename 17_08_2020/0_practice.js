//IIFE
(function () {
  //здесь находится приватная область видимости
})();

let myVariable;

(function () {
  const myFunction = function () {
    console.log('meow');
  };
  myVariable = myFunction;
})();

myVariable();

const Module = (function () {
  const _privateMethod = function () {
    console.log('private method');
  };

  return {
    publicMethod: function () {
      console.log('public method');
    },
  };
})();

Module.publicMethod();
// Module.privateMethod();

//publicMethod - могу его вызвать извне
//privateMethod - не могу его вызвать извне

//------------------------------------

class Robot {
  constructor(color, capacity) {
    this.color = color;
    this.capacity = capacity;
  }
}

let r100 = new Robot('red', 100);

//------------------------------------

class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BmwFactory {
  create(type) {
    if (type === 'X5') {
      return new Bmw(type, 3, 300);
    }
    if (type === 'X6') {
      return new Bmw(type, 4, 320);
    }
  }
}

const factory = new BmwFactory();

const x6 = factory.create('X6');

console.log(x6);

//----------------------------
function Car(options) {
  this.doors = options.doors || 4;
  this.state = options.state || 'brand new';
  this.color = options.color || 'silver';
}

function Truck(options) {
  this.state = options.state || 'used';
  this.wheelSize = options.wheelSize || 'large';
  this.color = options.color || 'blue';
}

function VehicleFactory() {}
//по умолчанию классом нашего транспортного средства, которое мы штампуем на фабрике, будет автомобиль (Car)
VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = function (options) {
  switch (options.vehicleClass) {
    case 'car':
      this.vehicleClass = Car;
      break;
    case 'truck':
      this.vehicleClass = Truck;
      break;
  }
  return new this.vehicleClass(options);
};

const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
  vehicleClass: 'car',
  color: 'black',
});

console.log(car);
console.log(car instanceof Car);

const truck = carFactory.createVehicle({
  vehicleClass: 'truck',
});

console.log(truck);
console.log(truck instanceof Truck);
