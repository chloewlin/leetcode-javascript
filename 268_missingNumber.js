// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:
// Input: [3,0,1]
// Output: 2

// Example 2:
// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

// Time Complexity: O(n)
// sum of natural numbers from 0 to n: n(n+1)/2
const missingNumber = (nums) => {
  let expectedSum = ((nums.length + 1) * nums.length) / 2;
  let currentSum = nums.reduce((a, b) => a + b);
  return expectedSum - currentSum;
};

console.log(missingNumber([0]));
console.log(missingNumber([3,0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));