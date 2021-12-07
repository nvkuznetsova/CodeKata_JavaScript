// создать пустой метод getIterator()

// создать метод forEach() который принимает колбэк
// получает итератор,
// { next() => { value: ... , done: boolean }
// использует метод next для получения значений
// и запускает колбек со значением

// напонить метод getIterator()
// таким образом, чтобы  при вызове функции next
// менялись поля value и done

class Iterable {
  constructor(array) {
    this._store = array;
  }
  getIterator() {
    const collection = this.getCollection();
    let index = -1;
    return {
      next() {
        index += 1;
        return {
          value: collection[index],
          done: index === collection.length
        }
      }
    }
  }
  
  forEach(callback) {
    const iterator = this.getIterator();
    let item = iterator.next(); // {value: 45, done: bool}
    while(!item.done) {
      callback(item.value);
      item = iterator.next();
    }
  }
  
  [Symbol.iterator]() {
    return this.getIterator();
  }
}

class MyArray extends Iterable {
  getCollection() {
    return [...this._store];
  }
}

class MyObj extends Iterable {
  getCollection() {
    return Object.values(this._store);
  }
}

const arr = new MyArray([1,2,3]);
const obj = new MyObj({
  a: 'a',
  b: 'b',
  c: 'c',
})

// arr.forEach((item) => console.log(item));
// obj.forEach((item) => console.log(item));

for(const item of arr) {
  console.log(item);
}