// Task 2: reverse string
String.prototype.reverse = function() {
  return this.split("")
    .map((char, index, arr) => {
      return arr[arr.length - index - 1];
    })
    .join("");
};

// Task 3: get sum of numbers between 'a' and 'b'
function range(a, b) {
  const [min, max] = a < b ? [a, b] : [b, a];
  // const [absMin, absMax] = Math.abs(a) < Math.abs(b) ? [Math.abs(a), Math.abs(b)] : [Math.abs(b), Math.abs(a)];
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

// Task 7: reverse number
// CAUTION: Dependant on custom String.prototype.reverse function created above
function reverseNumber(num) {
  let aboveZero = false;
  if (num > 0) {
    aboveZero = true;
  }
  return (
    Math.abs(num)
      .toString()
      .reverse() * (aboveZero ? 1 : -1)
  );
}
