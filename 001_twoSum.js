// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Solution 1: Brute Force
// Time Complexity: O(n2)
// Space Complexity: O(n)
function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      obj[[nums[i] + nums[j]]] = [i, j];
    }
  }
  return obj[target];
};

// Solution 2: for-loop
// Time Complexity: O(n) - for loop
// Space Complexity: O(n)
function twoSum(nums, target) {
  let hash = {};
  
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (diff in hash) {
      return [hash[diff], i];
    }

    hash[nums[i]] = i; 
  }
};

// Solution 3: for-in loop
// Time Complexity: O(n)
// Space Complexity: O(n)
function twoSum(nums, target) {
  let hash = {};
  for (let i in nums) {
    let diff = target - nums[i];
    if (hash[diff]) return [+hash[diff], +i];
    hash[nums[i]] = i; 
  }
};

console.log(twoSum([2,7,11,15], 9)); // [0, 1]
console.log(twoSum([2,11,15,7], 9)); // [0, 3]