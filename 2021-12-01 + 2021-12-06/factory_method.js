// создать классы Truck и Ship с методами deliver
// и полями subject - название груза и
// load - количество

// создать класс Factory c методом create
// create принимает options 
// в зависимости от поля options.type 
// метод возвращает или Truck илм Ship

class Transport {
  constructor (subject, load) {
    this.subject = subject;
    this.load = load;
  }
  
  deliver() {
    console.log(`Delivered ${this.load} of ${this.subject}`);
  }
}

class Truck extends Transport {
  deliver() {
    console.log("Delivering by cargo");
    super.deliver();
  }
}

class Ship extends Transport {
  deliver() {
    console.log("Delivering by shipment");
    super.deliver();
  }
}

// new Truck("bunnies", 700).deliver();
// new Ship("crocodiles", 900).deliver();

class Factory {  
  create(options){
    switch(options.type){
      case 'Truck':
        return new Truck(options.subject, options.load);
      case 'Ship':
        return new Ship(options.subject, options.load);
      default: 
        throw new Error('Oshibka!!!1');
    }
  }
}

new Factory().create({type: 'Truck', subject: 'cats', load: 458}).deliver();
new Factory().create({type: 'Ship', subject: 'dogs', load: 14}).deliver();
