//При передаче методов объекта в качестве коллбэков происходит потеря контекста.
//Как мы можем исправить некорректно работающий код ниже?

class Service {
  constructor() {
    this.token = 'token';
  }

  doSomething() {
    console.log(this.token);
  }
}
let service = new Service();

//callback on DOM event
document.getElementById('btn').addEventListener('click', service.doSomething);

//callback for timer
setTimeout(service.doSomething, 0);

//callback for custom function
run(service.doSomething);

function run(fn) {
  fn();
}
