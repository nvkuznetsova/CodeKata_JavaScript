// создать модуль
// создать калькулятор итог вычислений которого будет защищен 
// с методами add, substract, multyply, divide, clear, getResult
// с возможностью очистить знечение и получить результат

function getCalculator() { // пример замыкания
  let result = 0;
  return {
    add(number) {
      result += number;
    },
    substract(number) {
      result -= number;
    },
    getReult() {
      return result;
    }
  }
};

const calculator = (function() {    // модуль
  let result = 0;                   // private zone
  return {                          // api
    add(number) {
      result += number;
    },
    substract(number) {
      result -= number;
    },
    getReult() {
      return result;
    }
  }
})();

// calculator.add(8);
// calculator.substract(4);
// console.log(calculator.getReult());

// const calc = getCalculator();
// const calc2 = getCalculator();
// calc.add(10);
// calc2.add(1);
// calc.substract(5);
// console.log(calc.getReult(), calc2.getReult())
