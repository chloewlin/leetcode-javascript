// Given an integer array, find three numbers whose product is maximum and output the maximum product.

// Example 1:
// Input: [1,2,3]
// Output: 6
// Example 2:
// Input: [1,2,3,4]
// Output: 24
// Note:
// The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
// Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.

// TODO: clean up code
var maximumProduct = function(nums) {
  var max = nums[0];
  nums = nums.sort((a, b) => a - b);
  console.log(nums);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] * nums[i + 1] * nums[i + 2] > max) {
      max = nums[i] * nums[i + 1] * nums[i + 2];
    }
  }  
  return max;
};

console.log(maximumProduct([1, 2, 3, 4])); // 24
console.log(maximumProduct([-1, 2, -3, -4])); // 6
console.log(maximumProduct([1, -2, 3, 4])); // 12