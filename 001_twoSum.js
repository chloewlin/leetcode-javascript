// Best solution: Time Complexity: O(n)
function twoSum(nums, target) {
  let hashmap = {};
  for (let index in nums) {
    let difference = target - nums[index];
    if (!hashmap[difference]) {
      hashmap[nums[index]] = index;
    } else {
      return [+index, +hashmap[difference]];
    }
  }
};