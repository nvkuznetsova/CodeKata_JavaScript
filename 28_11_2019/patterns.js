class Observable {
  constructor() {
    this.observers = [];
    this.count = 0;
  }

  subscribe(observer) {
    console.log('Attached an observer.');
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    const idx = this.observers.indexOf(observer);
    this.observers.splice(idx, 1);
    console.log('Detached an observer.');
  }

  notify() {
    console.log('Notifying observers...');
    this.observers.forEach(observer => {
      observer.update(this.count);
    });
  }

  increase() {
    this.count++;
    this.notify();
  }
}


class Counter1 {
  update(count) {
    console.log(`Counter1 count ${count}`);
  }
}

class Counter2 {
  contructor() {
    this.count = 0;
  }
  update(count) {
    this.count = count;
    console.log(`Counter2 count ${count}`);
  }

  mul(x) {
    return this.count * x;
  }
}

const subject = new Observable();
const counter1 = new Counter1();
const counter2 = new Counter2();
subject.subscribe(counter1);
subject.subscribe(counter2);
subject.increase();
subject.increase();
console.log(counter2.mul(5));
subject.unsubscribe(counter2);
subject.increase();

class RangeCounter {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { value: this.current++, done: false };
        } else {
          return { done: true };
        }
      }
    }
  }
}

const counter = new RangeCounter(4, 10);
for (let num of counter) {
  console.log(num)
}

class Iterator {
  constructor(elements) {
    this.elements = elements;
    this.keys = Object.keys(elements);
    this.idx = 0;
  }

  first() {
    return this.elements[this.keys[0]];
  }

  next() {
    return this.elements[this.keys[this.idx++]];
  }

  last() {
    const idx = this.keys.length - 1;
    return this.elements[this.keys[idx]];
  }

  hasNext() {
    return this.idx === this.keys.length - 1;
  }
}

const obj = {
  do: { name: 'do' },
  re: { name: 're' },
  mi: { name: 'mi' },
}

const iterator = new Iterator(obj);