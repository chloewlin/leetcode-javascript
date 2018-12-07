// Given an array of n positive integers and a positive interger s, 
// find the minimal length of a contiguous subarray of which the sum >= s.
// If there isn't one, return 0 instead.

// Solution 1: Brute Force
var minSubArrayLen = function(s, nums) {
  var min = nums.length;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums.length; j++) {
      var subarray = nums.slice(i, j);
      var sum = subarray.reduce((a, b) => a + b, 0);
      var length = subarray.length;
      if (subarray.length > 0 && sum >= s && length < min) {
        min = length;
      }
    }
  }
  return min;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // return 2
// the subarray [4, 3] has the minimal length under the problem constraint
// possible subarray with sum greater than or equal to 7: 
// [2,3,1,2,4,3] => sum = 15, length = 6
// [3,1,2,4,3] => sum = 13, length = 5;
// [2,3,1,2,4] => sum = 12, length = 5
// [2,3,1,2] => sum = 8, length = 4
// [3,1,2,4] => sum = 10, length = 4
// [1,2,4] => sum = 7, length = 3
// [2,4,3] => sum = 9, length = 3
// [4,3] => sum = 7, length = 2