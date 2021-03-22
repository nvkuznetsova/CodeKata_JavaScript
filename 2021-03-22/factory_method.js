// создать классы Truck и Ship с методами deliver
// и полями subject - название груза и
// load - количество
// создать класс Factory c методом create
// create принимает options 
// в зависимости от поля options.type 
// метод возвращает или Truck илм Ship

class Trasport {
  constructor(subject, load) {
    this.subject = subject;
    this.load = load;
  }
}

class Truck extends Trasport{
  deliver() {
    console.log(`I carry ${this.subject} - ${this.load}`);
  }
}

class Ship extends Trasport{
  deliver() {
    console.log(`I swim with ${this.subject} - ${this.load}`);
  }
}

class Factory {
  static create(options) {
    switch(options.type) {
      case 'truck':
        return new Truck(options.subject, options.load);
      case 'ship': 
        return new Ship(options.subject, options.load);
      default:
        console.log('unknow type of tracport');
    }
  }
}

// const factory = new Factory;
// factory.create();

const options = {
  type: 'ship',
  subject: 'dogs',
  load: 5,
}

const t = new Truck('Cats', 34);
const s = Factory.create(options)
// console.log(t, s, Factory)









































































// class Transport {
//   constructor(options) {
//     this.subject = options.subject;
//     this.load = options.load;
//   }
//   deliver() {
//     console.log(`${this.subject} delivered`);
//   }
// }

// class Truck extends Transport {
//   deliver() {
//     console.log(`I deliver on the land ${this.load} ${this.subject}` );
//     super.deliver();
//   }
// }

// class Ship extends Transport {
//   deliver() {
//     console.log(`I deliver on water ${this.load} ${this.subject}` );
//     super.deliver();
//   }
// }

// class Factory {
//   create(options) {
//     if (options.type === 'truck') {
//       return new Truck(options)
//     }
//     if (options.type === 'ship') {
//       return new Ship(options)
//     }
//   }
// }

// const factory = new Factory;
// const truck = factory.create({type: 'truck', subject: 'cars', load: 8})
// truck.deliver()
