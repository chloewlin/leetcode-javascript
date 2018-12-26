// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.

// Note:
// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var threeSum = function(nums) {
  let res = [];
  let sorted = nums.sort((a,b) => a - b);

  for (let a = 0; a < sorted.length - 2; a++) {
    let target = 0 - sorted[a];
    let b = a + 1;
    let c = sorted.length - 1;
 
    // We can skip all the positive numbers since their sum won't be 0
    if (sorted[a] > 0) break;

    // To avoid repetition, skip the element with the same value
    if (a > 0 && sorted[a] === sorted[a-1]) continue; 

    while (b < c) {
      if (sorted[b] + sorted[c] === target) {
        res.push([sorted[a], sorted[b], sorted[c]]);
        b++;
        c--;
        while (b < c && sorted[b] === sorted[b-1]) b++;
        while (b < c && sorted[c] === sorted[c+1]) c--;
      } else if (sorted[b] + sorted[c]  < target) {
        b++;
      } else if (sorted[b] + sorted[c]  > target) {
        c--;
      }
    }
  }

  return res;
};

console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1, 0, 1],[-1, -1, 2]]
console.log(threeSum([-1,0,1,2,-1,4,-3])); // [[-1, 0, 1],[-1, -1, 2], [-1, -3, 4], [-3, 1, 2]]
console.log(threeSum([-2,-1,0,1,2,3])); // [[-1, 0, 1],[-2, 0, 2],[-2, -1, 3]]
console.log(threeSum([-100,92,1,-10,-5,-3,0,1,-56,1,6,9,-23,50,-98,0]));
//[[-98, 6, 92],[-56, 6, 50],[-10, 1, 9]]
console.log(threeSum([0,0,0,0])); //[0,0,0]