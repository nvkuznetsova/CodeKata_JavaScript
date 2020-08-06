//Что будет выведено в консоль?

function foo() {
  console.log('foo', this);
}

const obj = {
  name: 'Ivan Ivanov',
  foo: this.foo,
  bar: function () {
    console.log('bar', this);
  },
};

foo();
obj.foo();
obj.bar();

var o = {
  f: function () {
    return this;
  },
};

var o2 = { f: o.f };

console.log(o.f() === o);
console.log(o2.f() === o2);
