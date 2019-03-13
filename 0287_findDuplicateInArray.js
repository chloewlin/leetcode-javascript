// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one 
// duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Example 1:
// Input: [1,3,4,2,2]
// Output: 2

// Example 2:
// Input: [3,1,3,4,2]
// Output: 3

// Note:
// You must **not** modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.

// Solution: hashmap - O(n) time, O(1) space
const findDuplicate = (nums) => {
  let hash = {};
  
  // O(n)
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = hash[nums[i]] + 1 || 1;
  }

  // O(1)
  for (let key in hash) {
    if (hash[key] > 1) return key;
  }
};

// Tests
console.log(findDuplicate([1,3,4,2,2])); // 2
console.log(findDuplicate([3,1,3,4,2])); // 3
