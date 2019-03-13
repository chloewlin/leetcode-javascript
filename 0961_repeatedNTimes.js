// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
// Return the element repeated N times.

// Example 1:
// Input: [1,2,3,3]
// Output: 3

// Example 2:
// Input: [2,1,2,5,3,2]
// Output: 2

// Example 3:
// Input: [5,1,5,2,5,3,5,4]
// Output: 5
 
// Note:

// 4 <= A.length <= 10000
// 0 <= A[i] < 10000
// A.length is even

// Time Complexity: O(n)
var repeatedNTimes = function(A) {
  let N = A.length/2;
  let map = {};
  [...A].forEach((a) => map[a] = map[a] + 1 || 1);
  for (let key in map) {
    if (map[key] === N) return key;
  }
};

// Tests
console.log(repeatedNTimes([1,2,3,3])); // 3
console.log(repeatedNTimes([2,1,2,5,3,2])); // 2
console.log(repeatedNTimes([5,1,5,2,5,3,5,4])); // 5