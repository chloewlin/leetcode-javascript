// Time Complexity: O(1)
// Space Complexity: S(1)
// Strategy: XOR (bit manipulation)
var singleNumber = function(nums) {
  return nums.reduce(function(acc, currVal){
    return acc^currVal;
  });
};

var arr = [1, 2, 2, 3, 3, 5, 9, 8, 7, 5, 7, 8, 9, 1, 4];
console.log(singleNumber(arr));