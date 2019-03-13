// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

// Note:
// Each element in the result must be unique.
// The result can be in any order.

// Solution: hash table
// Time Complexity: O(n)
var intersection = function(nums1, nums2) {
  let hash = {};
  let res = [];

  for (let i = 0; i < nums1.length; i++) {
    hash[nums1[i]] = 1;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (hash[nums2[i]] === 1) {
      res.push(nums2[i]);
      hash[nums2[i]] = 2;
    }
  }

  return res;
};

console.log(intersection([1,2,2,1], [2,2])); // [2]
console.log(intersection([4,9,5], [9,4,9,8,4])); // [9,4]