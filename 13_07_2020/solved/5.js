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
document.getElementById('btn').addEventListener('click', () => {
  service.doSomething();
});

//callback for timer
setTimeout(service.doSomething.bind(service), 0);

//callback for custom function
run(service.doSomething.bind(service));

function run(fn) {
  fn();
}
