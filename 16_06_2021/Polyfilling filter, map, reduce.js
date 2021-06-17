//EXERCISE 3, polyfills

const arr = [1, 4, 2, 6, 8, 5, 3];

const filter = (predicateFn, array) => {
  let result = [];
  array.forEach(item => {
    if (predicateFn(item)) {
      result.push(item);
    }
  });
  return result;
};

const isEven = (n) => {
  return n % 2 === 0;
};
const isOdd = n => n % 2;

const mapCustom = (predicateFn, array) => {
  let result = [];

  array.forEach(item => {
    result.push(predicateFn(item));
  });

  return result;
};

console.log(mapCustom(item => item * 2, arr));

const reduce = (reducerFn, array, initialValue = array[0]) => {

  let accumulator = initialValue;
  array.forEach(item => {
    accumulator = reducerFn(accumulator, item, array);
  });
  return accumulator;
};

const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

const sum = reduce(sumReducer, arr);

console.log(sum);

////////////////////////////
// differences in scope between var & let:

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

