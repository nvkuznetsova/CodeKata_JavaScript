// создать классы Truck и Ship с методами deliver
// и полями subject - название груза и
// load - количество


// создать класс Factory c методом create
// create принимает options 
// в зависимости от поля options.type 
// метод возвращает или Truck или Ship

class Transport {
  constructor(subject, load) {
   this.subject = subject;
   this.load = load; 
  }
  
  deliver() {
    console.log(`I carry ${this.subject} - ${this.load}`);
  }
}

class Truck extends Transport {
  constructor(subject, load) {
   super(subject, load);
  }

  deliver() {
    super.deliver();
    console.log(` on the road!!`);
  }
}

class Ship extends Transport {
  constructor(subject, load) {
   super(subject, load);
  }

  deliver() {
    super.deliver();
    console.log(` by the sea!!`);
  }
}

class Factory {
  create(options) {
    if (options.type === 'ship') return new Ship(options.subject, options.load);
    if (options.type === 'truck') return new Truck(options.subject, options.load);
  }
}

const factory = new Factory;
const ship = factory.create({ type: 'ship', subject: 'coil', load: 500 });
ship.deliver();
