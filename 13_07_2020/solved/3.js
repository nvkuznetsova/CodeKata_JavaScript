function foo() {
  console.log('foo11', this);
}

const obj = {
  name: 'Ivan Ivanov',
  foo: this.foo,
  bar: function () {
    console.log('bar', this);
  },
};

foo(); //window
obj.foo(); //obj
obj.bar(); //obj

var o = {
  f: function () {
    return this;
  },
};

var o2 = { f: o.f };

console.log(o.f() === o); //true
console.log(o2.f() === o2); //true
