// на контекст:
/* var a = 1;
const b = function () {
  console.log(this.a);
}

const obj = {
  a: 'a',
  b,
  c: (...args) => {
    // if (args.length) {
    //   console.log(args[0].a);
    //   return;
    // }
    console.log(this.a);
  },
  c2: function () {
    this.c()
  },
  c3: () => {
    this.c()
  },
  c4: function () {
    this.c(this)
  },
  d: function() {
    const a = 'hello';
    const f = () => {
    console.log(this.a);
    }
    f()
  }
} */

// b()
// obj.b()
// obj.c()
// obj.c2()
// obj.c3()
// obj.c4()
// obj.d()
// obj.b.call({a: 'new'})
// obj.c.call({a: 'new'})
// obj.d.call({a: 'new'})
// obj.c3.call({
//   c() {console.log('ok!')}
//   })


// сумма рекурсией

/* const sum = (previosSum, ...args) => {
  previosSum+=args.shift()
  if (args.length !== 0) {
    previosSum = sum(previosSum, ...args)
  }
  return previosSum
} */

/* const sum = (a, b, ...rest) => {
  if (rest.length) {
    return a + b + sum(...rest)
  }
  if (b) {
    return a + b
  }
  return a;
} */

const sum = (...args) => {
  if (args.length <= 0) {
    return 0
  }
  const [first, ...rest] = args
  return first + sum(...rest)
}

// console.log(sum(1,2,3,4,5))

const getMemoFn = (f) => {
  const cash = {}
  console.log('cash:', cash)
  return (...args) => {
    if (cash[args.toString()]) {
      console.log('from cash:')
      return cash[args.toString()]
    }
    const result = cash[args.toString()] = f(...args);
    console.log('cash:', cash)
    return result
  }
}

const sumWithCash = getMemoFn(sum)
console.log(sumWithCash(1, 2, 3))
console.log(sumWithCash(1, 2, 3))
