//Что будет выведено в консоль?

console.log('console.log', this);

foo();
function foo() {
  console.log('Function declaration', this);
}

(function () {
  console.log('IIFE', this);
})();

const bar = () => {
  console.log('Arrow function', this);
};
bar();

function Bar() {
  console.log('bar');
  console.log(this);
}

new Bar();

const obj = {};

console.log(obj);
