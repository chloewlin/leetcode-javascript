// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and 
// it should return false if every element is distinct.

// Example 1:
// Input: [1,2,3,1]
// Output: true

// Example 2:
// Input: [1,2,3,4]
// Output: false

// Example 3
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function(nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = count[nums[i]] + 1 || 1;
  }
  for (let key in count) {
    if (count[key] > 1) return true;
  }
  return false;
};

console.log(containsDuplicate([1,2,3,1])); // True
console.log(containsDuplicate([1,2,3,4])); // False
console.log(containsDuplicate([1,2,3,4,5,2,1])); // True