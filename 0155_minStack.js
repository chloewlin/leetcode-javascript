// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// Note: using either an array or an object and then iterate through it to find the minimum element
// will not work for this problem. Remember, time complexity for getMin should be O(1)!  

var MinStack = function() {
  this.storage = [];
};

// Solution 1: A stack with objects
MinStack.prototype.push = function(x) {
  let min = this.storage.length > 0 ? this.storage[this.storage.length - 1].min: x;
  this.storage.push({
    value: x,
    min: Math.min(min, x)
  });
};
// MinStack {
//   storage:
//    [ { value: -2, min: -2 },
//      { value: 0, min: -2 },
//      { value: -3, min: -3 } ] }

MinStack.prototype.pop = function() {
  let removed = this.storage.pop();
  return removed ? removed.value : null;
};

MinStack.prototype.top = function() {
  if (this.storage.length === 0) { return null; }
  return this.storage[this.storage.length - 1].value;
};

MinStack.prototype.getMin = function() {
  if (this.storage.length === 0) return null;
  return this.storage[this.storage.length - 1].min;
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack);
console.log(minStack.getMin()); // Returns -3.
minStack.pop();
console.log(minStack.top()); // Returns 0.
console.log(minStack.getMin()); // Returns -2.