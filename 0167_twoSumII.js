// Given an array of integers that is already *sorted in ascending order*, find two numbers such that they 
// add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where 
// index1 must be less than index2.

// Note:
// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.

// Example:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

// Solution 1: Brute Force
// Time Complexity: O(n)
// Space Complexity: O(n)
var twoSum = function(numbers, target) {
  let hash = {};
  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];
    
    if (diff in hash) {
      return [+(hash[diff]+1), +(i+1)];
    }
    hash[numbers[i]] = i;
  }
};

// Solution 2: Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    
    // Return immediately when we find one pair
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {  // Move right pointer one step backward to reduce sum
      right--;
    } else if (sum < target) {  // Move left pointer one step forward to increase sum
      left++;
    }
  }
  
  return null;
};

console.log(twoSum([2,7,11,15], 9)); // [1, 2]
console.log(twoSum([2,7,11,15], 18)); // [2, 3]
console.log(twoSum([1,2,3,5,7,9,11,15,18,29,30], 13)); // [2, 7]
console.log(twoSum([1,2,7,11,14,16], 17)); // [1, 6]