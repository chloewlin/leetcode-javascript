// Time Complexity: O(n)
// Space Complexity: O(1)
// If the current value is NOT the target
// Overwrite the last element with the current value

var removeElement = function(nums, val) {
  var last = 0;
  for (var i = 0; i < nums.length; i++) { 
    if (nums[i] !== val) {
      nums[last] = nums[i];
      last++;
    }
  }
  return last;
};

console.log(removeElement([3, 2, 2, 3], 3)); // return [2, 2]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // return [0, 1, 3, 0, 4]
