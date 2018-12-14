// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to 
// the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for 
// the purpose of space complexity analysis.)

// Time Complexity: O(n)
var productExceptSelf = function(nums) {
  let result = [];
  let productOnTheLeft = 1, productOnTheRight = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = productOnTheLeft;
    productOnTheLeft *= nums[i]; 
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= productOnTheRight;
    productOnTheRight *= nums[i];
  }
  
  return result;
};

console.log(productExceptSelf([1,5,3,4,2])); // [120,24,40,30,60]
console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
console.log(productExceptSelf([9,3,2,5])); // [30,90,135,54]