// Time Complexity: O(n)
// Space Complexity: O(1)
// Strategy: XOR (bit manipulation)
var singleNumber = function(nums) {
  return nums.reduce((a, b) => a^b);
};

var arr = [1, 2, 2, 3, 3, 5, 9, 8, 7, 5, 7, 8, 9, 1, 4];
console.log(singleNumber(arr));