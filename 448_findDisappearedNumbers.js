// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]


// Time Complexity: O(n)
// Strategy: Use the numbers - 1 in nums array as index
var findDisappearedNumbers = function(nums) {
  var completeNums = [];
  for (var i = 1; i <= nums.length; i++) {
    completeNums.push(i);
  }
  for (var num of nums) {
    var index = num - 1;
    completeNums[index] = -1;
  }
  return completeNums.filter((num) => num > 0);
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); 