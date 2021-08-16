// создать модуль
// создать калькулятор 
// с методами add, substract, multyply, divide, clear, getResult
// с возможностью очистить знечение и получить результат
// итог вычислений защитить от изменений.


// const calculator = {
//   result: 0,

  
//   add: function(num) {
//     this.result += num;
    
//     return  this;
//   },

//   substract: function(num) {
//     this.result -= num;
    
//     return this;
//   },
  
//   getResult() {
//     return this.result
//   }
// }

// calculator.add(3).add(10).substract(4);

// console.log(calculator.getResult());

function getCalculator() {
  // защищенная область
  let result = 0;
  return {
    add: function(num) {
      result += num;
    },

    substract: function(num) {
      result -= num;
    },
    
    getResult() {
      return result
    }
  };
  // защищенная область
};

const calc2 = (function() {
  let result = 0;
  return {
    add: function(num) {
      result += num;
    },

    substract: function(num) {
      result -= num;
    },
    
    getResult() {
      return result
    }
  };
})();

const calc = getCalculator();
calc2.add(3);
calc2.add(10);
calc2.substract(2);
