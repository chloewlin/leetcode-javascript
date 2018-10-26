// Time Complexity: O(n)
var plusOne = function(digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      
      if (isNaN(digits[i - 1])) {
        digits.unshift(1);
      }

      if (digits[i - 1] !== 9) {
        digits[i - 1] = digits[i - 1] + 1;
        break;
      }
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }

  return digits;
};

console.log(plusOne([1,2,3])); // [1,2,4]
console.log(plusOne([1,9,9])); // [2,0,0]
console.log(plusOne([9,9])); // [1,0,0]
console.log(plusOne([9])); // [1,0]
// Edge case: JavaScript is only accurate up until the 15th digit!
// If we use a for-loop from the left to right, this array, which 
// has 19 digits, will become [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0] 
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])); 
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]