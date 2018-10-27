// Time Complexity: O(n)
// Majority count: more than n/2
var majorityElement = function(nums) {
  let count = {};
  let majorityCount = Math.floor(nums.length/2); 
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1;
    if (count[nums[i]] > majorityCount) return nums[i];
  }
};

console.log(majorityElement([1,1,1,2,2,2,2]));// 2
console.log(majorityElement([3,3,4]));// 3
console.log(majorityElement([1])); // 1