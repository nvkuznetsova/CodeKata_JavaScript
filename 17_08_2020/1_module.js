(function () {
  //приватная область видимости
})();

(function () {
  var myFunction = function () {
    // выполняем здесь некие действия
  };
})();

// myFunction(); //Uncaught ReferenceError: myFunction is not defined

// Объявим модуль
const Module = (function () {
  return {
    myMethod: function () {
      console.log('myMethod has been called.');
    },
  };
})();

// Вызовем функцию как метод объекта
Module.myMethod();

const Module = (function () {
  var _privateMethod = function () {};
  var publicMethod = function () {};
  return {
    publicMethod: publicMethod,
  };
})();
