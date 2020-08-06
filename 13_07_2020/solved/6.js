var foo = 'global foo';

const obj = {
  text: 'text',
  foo: function () {
    let that = this;
    console.log('foo', this.text); //obj
    function bar() {
      console.log('bar this', this.text); //потеря контекста
      console.log('bar that', that.text); //text
    }
    bar.call(this);
  },
};

obj.foo();

const doSomething = obj.foo.bind(obj);
doSomething(); //потеря контекста

//-------------------
function f(a, b, c) {
  return a * b + c;
}

console.log(f.bind(f, 1, 2, 3)());
console.log(f.call(f, 4, 5, 6));
console.log(f.apply(f, [1, 2, 3]));
