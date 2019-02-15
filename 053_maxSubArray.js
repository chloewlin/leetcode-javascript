// Time Complexity: O(n)
var maxSubArray = function(nums) {
  var max = nums[0];
  var currentMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    if (currentMax > max) max = currentMax;
  }
  return max;
};

// Time Complexity: O(n)
// Faster runtime
var maxSubArray2 = function(nums) {
  let sum = 0, max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) max = sum;
    if (sum < 0) sum = 0;
  }
  return max;
};

// Brute Force: worse than O(n2) time
const maxSubArray3 = (nums) => {
  let largestSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let currArr = nums.slice(i, j);
      let currSum = currArr.reduce((a, b) => a + b, 0);
      if (currSum > largestSum) {
        largestSum = currSum;
      }
    }
  }

  return largestSum;
};

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
// console.log(maxSubArray([-2])); // -2
// console.log(maxSubArray([-1, -2])); // -1
// console.log(maxSubArray([1])); // 1
// console.log(maxSubArray3([-2,1,-3,4,-1,2,1,-5,4])); // 6
// console.log(maxSubArray3([-2])); // -2
// console.log(maxSubArray3([-1, -2])); // -1
// console.log(maxSubArray3([1])); // 1
