// The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got 
// duplicated to another number in the set, which results in repetition of one number and loss of another number.

// Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs 
// twice and then find the number that is missing. Return them in the form of an array.

// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]

// Note:
// The given array size will in the range [2, 10000].
// The given array's numbers won't have any order.

var findErrorNums = function(nums) {
  let result = [0, 1];
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) { // Find duplicates
      result[0] = nums[i];
    } else if (nums[i] > nums[i - 1] + 1) { // Find missing number
      result[1] = nums[i - 1] + 1;
    }
  }

  // Edge cases
  if (nums[nums.length - 1] !== nums.length) {
    result[1] = nums.length;
  }

  return result;
};

// Tests
console.log(findErrorNums([1,2,2,4])); // [2,3]
console.log(findErrorNums([1,2,3,4,5,5,7,8])); // [5,6]
console.log(findErrorNums([3,2,2])); // [2,1]
console.log(findErrorNums([3,2,3,4,6,5])); // [3,1]
console.log(findErrorNums([1,1])); // [1,2] -----------> edge case
