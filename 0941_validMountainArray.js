// Given an array A of integers, return true if and only if it is a valid mountain array.

// Recall that A is a mountain array if and only if:

// A.length >= 3
// There exists some i with 0 < i < A.length - 1 such that:
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[B.length - 1]
 

// Example 1:
// Input: [2,1]
// Output: false

// Example 2:
// Input: [3,5,5]
// Output: false

// Example 3:
// Input: [0,3,2,1]
// Output: true
 
// Note:
// 0 <= A.length <= 10000
// 0 <= A[i] <= 10000 

var validMountainArray = function(A) {
  if (A.length < 3) return false;
  let mountainTop = Math.max(...A);
  let mountainTopIndex = A.indexOf(mountainTop);
  let i = 0; j = mountainTopIndex;
  
  while (i < mountainTopIndex) {
    if (A[i] >= A[i + 1]) { return false; }
    i++;
  }

  while (j < A.length) {
    if (A[j + 1] >= A[j]) { return false; } 
    j++;
  }

  if (i < 1 || j - mountainTopIndex === 1) return false;
  return true;
};

console.log(validMountainArray([2,1])); // false
console.log(validMountainArray([3,5,5])); // false
console.log(validMountainArray([0,3,2,1])); // true
console.log(validMountainArray([1,2,3,4,5,4,3,2,1])); // true
console.log(validMountainArray([5,5,5,6,4,8,2])); // false
console.log(validMountainArray([1,1,1,1,1])) // false
// edge cases
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9])); // false
console.log(validMountainArray([9,8,7,6,5,4,3,2,1,0])); // false 