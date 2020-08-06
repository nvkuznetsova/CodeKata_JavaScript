// Давайте напишем собственную имплементацию метода bind:

const obj = {
  name: 'Doggo',
  sayHi: function (doSomething) {
    console.log(
      `Hi! I'm a good ${this.name} and I can ${doSomething} very well`
    );
  },
};

obj.sayHi('bark');

const greeting = bind();
greeting();

function bind() {
  //???
}
