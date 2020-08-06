const obj = {
  name: 'Doggo',
  sayHi: function (doSomething) {
    console.log(
      `Hi! I'm a good ${this.name} and I can ${doSomething} very well`
    );
  },
};

obj.sayHi('bark');

const greeting = bind(obj.sayHi, obj, 'run');
greeting();

function bind(func, context, ...args) {
  return (...funcArgs) => {
    return func.call(context, ...args, ...funcArgs);
  };
}

/*
В bind, помимо контекста, передаются аргументы - используем оператор spread/rest
*/
