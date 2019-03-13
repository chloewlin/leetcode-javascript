// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach 
// the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// Dynamic Programming
const uniquePaths = function(m, n) {
  let currRow = new Array(n);

  for (let i = 0; i < currRow.length; i++) {
    currRow[i] = 1;
  }

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      currRow[col] += currRow[col - 1];
    }
  }

  return currRow[n - 1];
};

// Note: m and n will be at most 100.

// Example 1:
// [[0, 0, 0],
//  [0, 0, 0]]
// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

// Example 2:
// Input: m = 7, n = 3
// Output: 28

console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(7, 3)); // 28
