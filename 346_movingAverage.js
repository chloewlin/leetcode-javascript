// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// Example:
// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3

// Note: Arrow functions do not have a prototype property. Do not use `const MovingAverage = (size) => {}`.
const MovingAverage = function(size) {
  this.window = [];
  this.size = size;
};

MovingAverage.prototype.next = function(val) {
  this.window.push(val);
  while (this.window.length > this.size) this.window.shift();
  return this.window.reduce((a, b) => a + b) / Math.min(this.window.length, this.size);
};

// Tests
let m = new MovingAverage(3);
console.log(m.next(1)); // 1
console.log(m.next(10)); // (1 + 10) / 2
console.log(m.next(3)); // (1 + 10 + 3) / 3
console.log(m.next(5)); // (10 + 3 + 5) / 3
console.log(m.next(7)); // (3 + 5 + 7) / 3