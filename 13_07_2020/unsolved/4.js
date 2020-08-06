//Что произойдет при вызове метода service.doSomething()?
//Происходит ли потеря контекста? Если да, то как мы можем всё исправить?

class Service {
  constructor() {
    this.numbers = [1, 2, 3];
    this.token = 'token';
  }

  doSomething() {
    setTimeout(function doAnotherThing() {
      this.numbers.forEach(function (number) {
        console.log(number);
        console.log(this.token);
      });
    }, 100);
  }
}

let service = new Service();
service.doSomething();
