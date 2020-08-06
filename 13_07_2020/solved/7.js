var f = function () {
  this.x = 5;
  (function () {
    this.x = 3;
  })();
  console.log(this.x);
};

// const foo = new f();

// console.log(foo);

var obj = {
  x: 4,
  m: function () {
    console.log(this.x);
    // console.log('m', this);
  },
};

f(); //3
new f(); //5
obj.m(); //4
new obj.m(); //потеря контекста
f.call(f); //5
obj.m.call(f); // 5 в контексте f
