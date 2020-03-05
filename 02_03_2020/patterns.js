// -------- Factory method------//
// Base class
class LogisticsCreator {
  // factory method
  create(cargo) {
    console.log(`Create logistics for cargo: ${cargo}`);
  }

  deliverCargo(cargo, type) {
    const product = this.create(cargo, type);
    product.deliver();
  }
}

// Concrete fabrics
class LandLogistics extends LogisticsCreator {
  create(cargo, type) {
    super.create(cargo);
    switch (type) {
      case 'truck': {
        return new Truck(cargo);
      }
      case 'train': {
        return new Train(cargo);
      }
      default: {
        return new Truck(cargo);
      }
    }
  }
}

class AirLogistics extends LogisticsCreator {
  create(cargo) {
    super.create(cargo);
    return new Airplane(cargo);
  }
}

class ShipLogistics extends LogisticsCreator {
  create(cargo) {
    super.create(cargo);
    return new Ship(cargo);
  }
}

// Concrete products
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

clientCode(new LandLogistics(), 'bananas', 'train');
clientCode(new AirLogistics(), 'laptops');

//-------- Singleton--------//
const singleton = (() => {
  let instance;
  const createInstance = () => {
    return { name: 'I am singleton instance' };
  }

  const getInstance = () => {
    return instance || (instance = createInstance());
  }

  return {
    getInstance,
  }
})();

const s1 = singleton.getInstance();
const s2 = singleton.getInstance();
console.log(s1 === s2);

// --------Decorator--------//
// Concrete component with main business logic
class Notifier {
  send(message) {
    return `Message: ${message}`;
  }
}

// Base Decorator
class BaseDecorator {
  constructor(component) {
    // decorated component
    this.component = component;
  }

  // Delegate all work to the wrapped object
  send(message) {
    return this.component.send(message);
  }
}

// Concrete decoratoes
class EmailDecorator extends BaseDecorator {
  constructor(component, mail) {
    super(component);
    this.mail = mail;
  }
  send(message) {
    return `${super.send(message)} by mail to ${this.mail}`;
  }
}

class TelegramDecorator extends BaseDecorator {
  constructor(component, id) {
    super(component);
    this.id = id;
  }
  send(message) {
    return `${super.send(message)} by telegram to ${this.id}`;
  }
}

const notifier = new Notifier();
const mailSender = new EmailDecorator(notifier, 'example@gmail.com');
const telegramAndMailSender = new TelegramDecorator(mailSender, '@someId');
console.log(telegramAndMailSender.send('Hello'));
console.log(telegramAndMailSender);