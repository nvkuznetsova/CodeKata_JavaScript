//Создание 1 объекта литеральной нотацией
const housewife = {
  name: 'Housewife',
  legs: 2,
  hands: 2,
  sleep() {
    console.log('Zzzz...');
  },
};

//Создание 1 объекта через Object.create() без указания прототипа
const tom = Object.create(null);

tom.name = 'Tom';
tom.legs = 2;
tom.hands = 2;

tom.run = function () {
  console.log(`${this.name} is running really fast!`);
};

//Решение 1. Создание множества объектов через функцию-фабрику
function miceCreator(name, legs, hands) {
  const newMouse = Object.create(miceFunctionStore); //задаём miceFunctionStore в качестве прототипа для newMouse

  newMouse.name = name;
  newMouse.legs = legs;
  newMouse.hands = hands;

  return newMouse;
}

miceFunctionStore = {
  run: function () {
    console.log(`${this.name} is running really fast!`);
  },
};

const jerry = miceCreator('Jerry', 2, 2);

//Решение 2. Создание множества объектов через функцию-фабрику c ключевым словом new. Данное решение не будет работать без использования new
function MiceCreator2(name, legs, hands) {
  this.name = name;
  this.legs = legs;
  this.hands = hands;
}

MiceCreator2.prototype.run = function () {
  console.log(`${this.name} is running really fast!`);
};

const tuffy = new MiceCreator2('Tuffy', 2, 2);

//Решение 3. Создание множества объектов через "класс". Класс является синтаксическим сахаром, т.е. внешне наш код меняется, но "под капотом" мы производим те же действия, что и ранее.
class miceCreator3 {
  constructor(name, hands, legs) {
    this.name = name;
    this.legs = legs;
    this.hands = hands;
  }
  run() {
    console.log(`${this.name} is running really fast!`);
  }
}

const mickey = new miceCreator3('Mickey', 2, 2);
