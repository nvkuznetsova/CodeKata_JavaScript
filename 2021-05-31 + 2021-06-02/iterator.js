class Iterable {
  constructor(collection) {
    this.collection = collection;
  }

  getIterator() {
    const list = this.getCollction(); // [1,2,3]
    let index = -1;
    return {
      next() {
        index += 1;
        return {
          value: list[index],
          done: index === list.length,
        }
      }
    }
  }

  forEach(callback) {
    const iterator = this.getIterator(); // { next: () => {value: ..., done: ...} }
    let next = iterator.next();
    while (!next.done) {
      callback(next.value);
      next = iterator.next();
    }
  }

  [Symbol.iterator]() {
    return this.getIterator();
  }
}

class MyArray extends Iterable{
  getCollction() {
    return [...this.collection];
  }
}

class MyObject extends Iterable {
  getCollction() {
    return Object.values(this.collection);
  }
}

const arr = new MyArray([1,2,3]);
// arr.forEach((el) => console.log(el));

const obj = new MyObject({
  a: 'a',
  b: 'b',
  c: 'c',
});
// obj.forEach((el) => console.log(el));

// for (let item of obj) {
//   console.log(item);
// }
