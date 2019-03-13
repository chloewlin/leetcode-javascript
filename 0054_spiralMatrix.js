// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// O(n2) time
var spiralOrder = function(matrix) {
  let res = [];

  if (matrix.length === 0) return res;

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // left to right 
    for (let i = colBegin; i <= colEnd; i++) {
      res.push(matrix[rowBegin][i]);
    }
    ++rowBegin;

    // top to bottom 
    for (let i = rowBegin; i <= rowEnd; i++) {
      res.push(matrix[i][colEnd]);
    }
    --colEnd;

    // right to left
    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        res.push(matrix[rowEnd][i]);
      }
    }
    --rowEnd;

    // bottom to top
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        res.push(matrix[i][colBegin]);
      }
    }
    ++colBegin;
  }

  return res;
};

// Tests

let matrix1 = 
[
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
];

let matrix2 = 
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
];

console.log(spiralOrder(matrix1));
console.log(spiralOrder(matrix2));
