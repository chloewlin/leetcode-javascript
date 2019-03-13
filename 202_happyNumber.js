// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the 
// squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which 
// does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 

// Input: 19
// Output: true

var isHappy = function(n) {
  var hash = {};
  while (n !== 1 && !hash[n]) {
    hash[n] = true;
    n = sumOfSquares(n);
  }
  return n === 1 ? true : false;
};

function sumOfSquares(numString) {
  return [...numString.toString()].reduce((sum, num) => {
    return sum + Math.pow(num, 2);
  }, 0);
}

// Tests
console.log(isHappy(19)); // true
console.log(isHappy(5)); // false
