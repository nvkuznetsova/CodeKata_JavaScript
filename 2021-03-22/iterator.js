class myArray {
  store = [1,2,3];

  getStore() {
    return [...this.store]
  }

  [Symbol.iterator]() {
    return this.getIterator();
  }

  getIterator() {
    const store = this.getStore();
    let index = -1;
    return {
      next() {
        index += 1;
        return {
          value: store[index],
          done: index === store.length,
        }
      }
    }
  }
}

function forEach (iterable) {
  const iterator = iterable.getIterator();
  let value = iterator.next();
  while(!value.done) {
    console.log(value.value);
    value = iterator.next();
  }
  console.log('finished');
}

const arr = new myArray;

forEach(arr);


for (let value of arr) {
  console.log(value)
}






















































































// class Iterable {
//   [Symbol.iterator]() {
//     return this.getIterator();
//   }
  
//   getIterator() {
//     const store = this.getStore();
//     let index = -1;
//     return {
//       next() {
//         index += 1;
//         return {
//           value: store[index],
//           done: store.length === index
//         }
//       }
//     }
//   }

//   forEach(callback) {
//     const iterator = this.getIterator();
//     let next = iterator.next();
//     while(!next.done) {
//       callback(next.value);
//       next = iterator.next();
//     }
//   }
// }

// class MyArray extends Iterable {
//   constructor(values = []) {
//     super();
//     this.store = [...values];
//   }

//   add(value) {
//     this.store.push(value);
//   }

//   getStore() {
//     return [...this.store];
//   }
// }

// class MyObject extends Iterable {
//   constructor() {
//     super();
//     this.store = {};
//   }

//   add(key, value) {
//     this.store[key] = value;
//   }

//   getStore() {
//     return Object.entries(this.store);
//   }
// }

// function forEach(iterable) {
//   const iterator = iterable.getIterator();
//   let curentValue = iterator.next();
//   while(!curentValue.done) {
//     console.log(curentValue.value);
//     curentValue = iterator.next();
//   }
//   console.log('finished');
// }

// const arr = new MyArray([1,2,3]);
// arr.add(4);
// arr.add('mike');

// forEach(arr);

// // for (let item of arr) {
// //   console.log(item)
// // }

// // arr.forEach(el => console.log(el));

// // const obj = new MyObject();
// // obj.add('name', 'Mike');
// // obj.add('surname', 'Petrov');
// // obj.add('age', 42);
// // obj.forEach(el => console.log(el));
