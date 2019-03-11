// Time Complexity: O(n)
// Space Complexity: O(1)
// Key: the input array is sorted
// Use a pointer to keep track of the value of the index of the last non-depulicate number
  // if the last is the same as the curr, do nothing
  // else, increment the last by 1
  // overwrite the last as the different curr value
// Return last + 1 (last is the index, but the output is the length)

var removeDuplicates = function(nums) {
  var last = 0;
  for (var i = 1; i < nums.length; i++) { 
    if (nums[i] !== nums[last]) {
      last++;
      nums[last] = nums[i];
    }
  }
  return last + 1;
};

var nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));