// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:
// Input: [1, 2, 2, 3, 1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.

// Example 2:
// Input: [1,2,2,3,1,4,2]
// Output: 6
// Note:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.

var findShortestSubArray = function(nums) {
  var counts = {};
  var max = 0;

  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]] = (counts[nums[i]] || 0) + 1;
    max = Math.max(max, counts[nums[i]]);
  }

  var res = nums.length;

  for (var k in counts) {
    if (counts[k] === max) {
      res = Math.min(res, nums.lastIndexOf(Number(k)) - nums.indexOf(Number(k)) + 1);
    }
  }

  return res;    
};

// Tests
console.log(findShortestSubArray([1, 2, 2, 3, 1])); // 2
console.log(findShortestSubArray([1,2,2,3,1,4,2])); // 6
