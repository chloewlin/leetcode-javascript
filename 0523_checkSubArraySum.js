// Given a list of non-negative numbers and a target integer k, write a function to check if the array 
// has a continuous subarray of size at least 2 that sums up to the multiple of k, that is, sums up to 
// n*k where n is also an integer.

// Example 1:
// Input: [23, 2, 4, 6, 7], k = 6
// Output: True
// Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.

// Example 2:
// Input: [23, 2, 6, 4, 7], k = 6
// Output: True
// Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.

// Note:
// The length of the array won't exceed 10,000.
// You may assume the sum of all the numbers is in the range of a signed 32-bit integer.

// Strategy: Dynamic Programming
var checkSubarraySum = function(nums, k) {
  let cache = {};
  cache[0] = 0;
  let sum = 0;
  
  // O(n)
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let remainder = sum % k;

    if (cache[remainder]) {
      let indexOfSumSoFar = cache[remainder];

      if ((indexOfSumSoFar - (i + 1)) === 1) { // Subarray is not at least size 2
        continue;
      } else {
        return true;
      }
    } else {
      cache[remainder] = i + 1;
    }
  }

  return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)); // True
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6)); // True
console.log(checkSubarraySum([23, 2, 6, 4, 7], 0)); // False