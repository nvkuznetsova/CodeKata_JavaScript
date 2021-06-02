// создать модуль
// создать калькулятор 
// с методами add, substract, multyply, divide, clear, getResult
// с возможностью очистить знечение и получить результат
// итог вычислений защитить от изменений.

const calculator = (function() {
  // защищенная область
  let result = 0;
  return {
    add: function(a) {
      return result += a;
    },
    multyply(a) {
      return result *= a;
    },
    result() {
      return result;
    }
  }
  // защищенная область
})();

// function getCalculator() {
//   let result = 0;
//   return {
//     add: function(a) {
//       return result += a;
//     },
//     multyply(a) {
//       return result *= a;
//     },
//     result() {
//       return result;
//     }
//   }
// } 

// const calculator1 = getCalculator();
// const calculator2 = getCalculator();
// const calculator3 = getCalculator();

// const b = calculator.add(4);
// console.log(b);
// calculator.multyply(5);
// console.log(calculator.result());
// console.log(result);
