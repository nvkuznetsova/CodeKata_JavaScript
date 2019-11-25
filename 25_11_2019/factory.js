class LogisticsCreator {
  create(cargo, type) {
    switch (type) {
      case 'truck': {
        return new Truck(cargo);
      }
      case 'train': {
        return new Train(cargo);
      }
      case 'ship': {
        return new Ship(cargo);
      }
      case 'airplane': {
        return new Airplane(cargo);
      }
      default: {
        return new Truck(cargo);
      }
    }
  }

  deliverCargo(cargo, type) {
    const product = this.create(cargo, type);
    product.deliver();
  }
}

class Truck {
  constructor(cargo) {
    this.type = 'truck';
    this.cargo = cargo;
  }

  deliver() {
    console.log(`${this.type} deliver ${this.cargo} by land`);
  }
}

class Ship {
  constructor(cargo) {
    this.type = 'ship';
    this.cargo = cargo;
  }

  deliver() {
    console.log(`${this.type} deliver ${this.cargo} by sea`);
  }
}

class Airplane {
  constructor(cargo) {
    this.type = 'airplane';
    this.cargo = cargo;
  }

  deliver() {
    console.log(`${this.type} deliver ${this.cargo} by air`);
  }
}

class Train {
  constructor(cargo) {
    this.type = 'train';
    this.cargo = cargo;
  }

  deliver() {
    console.log(`${this.type} deliver ${this.cargo} by raliway`);
  }
}

const clientCode = (creator, cargo, type) => {
  creator.deliverCargo(cargo, type);
}

clientCode(new LogisticsCreator(), 'cats', 'train');
clientCode(new LogisticsCreator(), 'dogs', 'airplane');