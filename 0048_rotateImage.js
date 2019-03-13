// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
// DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

// Example 2:
// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

// Solution 1: O(n2) time, O(n) space - use extra data structure
var rotate = function(matrix) {
  let n = matrix.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    res[i] = [];
    for (let j = 0; j < n; j++) {
      res[i][j] = matrix[n - j - 1][i];
    }
  }

  return res;
};

// Solution 2: O(n2) time, O(1) space - rotate in-place
// Transpose, then reverse
// For example,
// let transposed = [
//   [1,4,7],
//   [2,5,8],
//   [3,6,9]
// ];

var rotateInPlace = (matrix) => {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // You don't need to `return` anything since we're rotating in-place
  matrix.forEach(row => row.reverse());
};

// Tests
let matrix1 = [   // i, j   => j, n - j - 1
  [1,2,3],        // [0, 0] => [0, 2] 
  [4,5,6],        // [0, 2] => [2, 0]
  [7,8,9]         // [2, 0] => [0, 0]
];

console.log(rotate(matrix1));
console.log(rotateInPlace(matrix1));
