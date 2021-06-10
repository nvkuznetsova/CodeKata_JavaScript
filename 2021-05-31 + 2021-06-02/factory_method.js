// создать классы Truck и Ship с методами deliver
// и полями subject - название груза и
// load - количество
// создать класс Factory c методом create
// create принимает options 
// в зависимости от поля options.type 
// метод возвращает или Truck илм Ship

class Transport {
  constructor(options) {
    this.subject = options.subject;
    this.load = options.load;
  }
  deliver() {
    console.log(`I have ${this.subject} - ${this.load}`);
  }
}

class Truck extends Transport {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  deliver() {
    super.deliver();
    console.log('by road');
  }
}
class Ship extends Transport {
  constructor(options) {
    super(options);
    this.weight = options.weight;
  }
  deliver() {
    super.deliver();
    console.log('by sea');
  }
}

class Factory {
  create(options) {
    let transport;
    if (options.type === 'truck') {
      transport = new Truck(options);
    }
    if (options.type === 'ship') {
      transport = new Ship(options);
    }
    return transport;
  }
}

// const factory = new Factory;
// const ship = factory.create({
//   type: 'ship',
//   subject: 'cats',
//   load: 4,
//   weight: 4565,
// });
// ship.deliver();

// const truck = factory.create({
//   type: 'truck',
//   subject: 'dogs',
//   load: 40,
//   color: 'red',
// });
// truck.deliver();
