// реализовать useless library которая преобразует строки
// library при инициализции принимает число и сохраняет ее в приватную область
// число означает сколько первых символов мы будем возвращать
// возвращает набор функций
// customUpperCase - принимает сроку, и возвращает первые символы в верхнем регистре
// changeNumber - принимает число и переписывает созраненное

// огрнизовать код таким образом, чтобы экземпляр библиотеки в коде существовал только один+


const ul = ((initialNumber) => {
  // private
  let number = initialNumber;
  
  return {
    customUpperCase: (str) => {
      return str.slice(0, number).toUpperCase();
    },
    changeNumber: (num) => {
      number = num;
    },
  // private
  };
})(2);

const UselessLibrary = (initialNumber) => {
  // private
  let number = initialNumber;
  
  return {
    customUpperCase: (str) => {
      return str.slice(0, number).toUpperCase();
    },
    changeNumber: (num) => {
      number = num;
    },
  // private
  };
};

const libraryInst = UselessLibrary(3);
const libraryInst2 = UselessLibrary(15);
