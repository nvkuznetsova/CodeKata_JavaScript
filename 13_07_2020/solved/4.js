class Service {
  constructor() {
    this.numbers = [1, 2, 3];
    this.token = 'token';
  }

  doSomething() {
    setTimeout(() => {
      this.numbers.forEach((number) => {
        console.log(number);
        console.log(this.token);
      });
    }, 100);
  }
}

let service = new Service();
service.doSomething();
