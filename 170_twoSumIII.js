// Design and implement a TwoSum class. It should support the following operations: add and find.

// add - Add the number to an internal data structure.
// find - Find if there exists any pair of numbers which sum is equal to the value.

// Example 1:
// add(1); add(3); add(5);
// find(4) -> true
// find(7) -> false

// Example 2:
// add(3); add(1); add(2);
// find(3) -> true
// find(6) -> false

/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
  this.cache = {};
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  this.cache[number] = this.cache[number] + 1 || 1;
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  for (let key in this.cache) {
    let diff = value - key;
   
    // Note: strict comparison operators (=== and !==) will fail the tests 
    if (key != diff && this.cache[diff] >= 1) {
      return true;
    } else if (key == diff && this.cache[diff] >= 2) {
      return true;
    }
  }
  return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

var test = new TwoSum();
test.add(2);
test.add(7);
test.add(11);
test.add(5);
console.log(test.find(9)); // true
console.log(test.find(13)); // true
console.log(test.find(17)); // false

var test1 = new TwoSum();
test1.add(1);
console.log(test.find(1)); // false

var test2 = new TwoSum();
test2.add("TwoSum");
test2.add("add");
test2.add("find");
console.log(test2.find("")); // null;
console.log(test2.find(0)); // null;
console.log(test2.find("0")); // false;

// Edge case: when two numbers of the same value add up to sum 
var test3 = new TwoSum();
test3.add(1);
test3.add(1);
test3.add(3);
console.log(test3.find(2)); // true

// Edge case: strings and numbers are considered the same type and comparable in this problem
var test4 = new TwoSum();
test4.add("1"); // Your algorithm should be able to add "1" and 1
test4.add(1);
test4.add(3);
console.log(test4.find(2)); // true