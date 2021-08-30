// создать класс MyArray
// конструктор принимает масив и заполняет внутренне поле

// создать метод getCollction() который возвращает копию коллекции 
// в виде удобном для итерации

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
  constructor(arr) {
    this.collection = arr;
  }
  getIterator(){
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

class MyArray extends Iterable {
  getCollection() {
    return [...this.collection];
  }
}

class MyObject extends Iterable {
  getCollection() {
    return Object.values(this.collection)
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

for (const value of obj) {
  console.log(value);
}
