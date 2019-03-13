// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

const subsets = (nums) => {
  return nums.reduce((subset, val) => subset.concat(subset.map(set => [val, ...set])), [[]]);
};

// DFS
const subsets = (nums) => {
  let res = [];
  findSet([], 0);

  function findSet(current, index) {
    res.push(current);
    for (let i = index; i < nums.length; i++) {
      findSet(current.concat(nums[i]), i + 1);
    }
  } 

  return res;
};

console.log(subsets([1,2,3]));
