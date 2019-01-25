// Given an array A of non-negative integers, return an array consisting of all the even elements of A, 
// followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Example 1:
// Input: [3,1,2,4]
// Output: [2,4,3,1]

// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

// Note:
// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

// Solution 1
const comparator = (a, b) => {
  if (a % 2 === 0 && b % 2 === 1) return -1;
  if (b % 2 === 0 && a % 2 === 1) return 1;
  return 0;
};

const sortArrayByParity = (A) => {
  return A.sort(comparator);
};

// Solution 2
const comparator = (a, b) => {
  return A.sort((a, b) => { return a % 2 - b % 2; }); 
};

// Test
console.log(sortArrayByParity([3,1,2,4])); // [2,4,3,1]