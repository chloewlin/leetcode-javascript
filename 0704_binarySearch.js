var search = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;

  while (left <= right) {
    var midpoint = left +  Math.floor(right - left/2);
    if (nums[midpoint] === target) {
      return midpoint;
    }
    if (target > nums[midpoint]) {
      left = midpoint + 1;
    } else {
      right = midpoint - 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
