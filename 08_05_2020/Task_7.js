/*
Задание 7
Без выполнения кода скажите, что будет выведено в консоли?
*/

var a = 5;

setTimeout(function timeout() {
  console.log('setTimeout', a);
  a = 10;
}, 0); // macrotasks // fourth 'setTimeout' 25

var p = new Promise(function (resolve, reject) {
  console.log('promise', a); // first 5
  a = 25;
  resolve();
});

p.then(function () {
  console.log('then');
  console.log(a);
}); // microtasks // third 'then' 25

console.log('main', a); // second 25
