// Given an array of integers and an integer k, find out whether there are two distinct indices 
// i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j 
// is at most k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

var containsNearbyDuplicate = function(nums, k) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in count && i - count[nums[i]] <= k) {
      return true;
    } 
    count[nums[i]] = i;
  }
  return false;
};


console.log(containsNearbyDuplicate([1,2,3,1], 3)); // true
console.log(containsNearbyDuplicate([1,0,1,1], 1)); // true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // false

