// Time Complexity: O(n)
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

// Time Complexity: O(n2)
function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      obj[[nums[i] + nums[j]]] = [i, j];
    }
  }
  return obj[target];
};