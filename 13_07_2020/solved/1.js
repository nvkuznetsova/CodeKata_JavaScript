'use strict';

console.log('console.log', this); //window

foo(); // window
function foo() {
  console.log('Function declaration', this);
}

(function () {
  console.log('IIFE', this);
})(); // window

const bar = () => {
  console.log('Arrow function', this);
};
bar(); // window

function Bar() {
  console.log('bar');
  console.log(this);
}

new Bar(); //ссылка на Bar / ссылка на новый объект

const obj = {};

console.log(obj);
