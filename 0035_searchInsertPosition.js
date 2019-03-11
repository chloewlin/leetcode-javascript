var searchInsert = function(nums, target) {
  var mid;
  var left = 0;
  var right = nums.length - 1;
  
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    }
    if (target < nums[mid]) {
      right = mid - 1;
    }
  };
  // When target is not in nums, our midIndex could end up being on either left or right. 
  // If we want to look for 2 in array [1, 3] and our midIndex is 1,
    // Then we return the current midIndex.
  // Else if out midIndex is 0, 
    // Then we return the current midIndex + 1.
  if (target < nums[mid]) {
    return mid;
  } else if (target > nums[mid]) {
    return mid + 1;
  }
};

console.log(searchInsert([1,3,5,7], 2)); // 1
console.log(searchInsert([1,3,5,7], 4)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4