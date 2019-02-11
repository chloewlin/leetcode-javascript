// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:
// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

// Solution: recursively divide the number down until it only has one digit.
var addDigits = function(num) {
  let arr = [...num.toString()];   

  if (arr.length > 1) {
    let sum = 0;
    arr.map((num) => sum += +num);
    return addDigits(sum);
  } else {
    return +arr[0];
  }
};

// Tests
console.log(addDigits(38)); // 2
console.log(addDigits(345)); // 3 + 4 + 5 = 12, 1 + 2 = 3
