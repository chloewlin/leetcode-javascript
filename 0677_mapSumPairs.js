// Implement a MapSum class with insert, and sum methods.

// For the method insert, you'll be given a pair of (string, integer). The string represents the 
// key and the integer represents the value. If the key already existed, then the original key-value 
// pair will be overridden to the new one.

// For the method sum, you'll be given a string representing the prefix, and you need to return the 
// sum of all the pairs' value whose key starts with the prefix.

// Example 1:
// Input: insert("apple", 3), Output: Null
// Input: sum("ap"), Output: 3
// Input: insert("app", 2), Output: Null
// Input: sum("ap"), Output: 5

var MapSum = function() {
  this.map = {}; 
};

MapSum.prototype.insert = function(key, val) {
  this.map[key] = val;   
};

MapSum.prototype.sum = function(prefix) {
  let res = 0;
  console.log(this.map);
  for (let key in this.map) {
    if (prefix === key.slice(0, prefix.length)) {
      res += this.map[key];
    }
  }
  return res;
};

// Tests
const t = new MapSum();
t.insert('apple', 3); // null
console.log(t.sum('ap')); // 3
t.insert('app', 2); // null
console.log(t.sum('ap')); // 5
console.log(t.sum('le')); // 0
