// Given a matrix A, return the transpose of A.

// The transpose of a matrix is the matrix flipped over it's main diagonal, 
// switching the row and column indices of the matrix.

 
// Example 1:
// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// Example 2:
// Input: [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]
 
// Note:

// 1 <= A.length <= 1000
// 1 <= A[0].length <= 1000

var transpose = function(matrix) {
  let res = [];

  for (let i = 0; i < matrix[0].length; i++) {
    if (!res[i]) res[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      res[i].push(matrix[j][i]);
    }
  }

  return res;
};

// Tests
let matrix1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
console.log(transpose(matrix1));

let matrix2 = [
  [1,2,3],
  [4,5,6]
]
console.log(transpose(matrix2));
