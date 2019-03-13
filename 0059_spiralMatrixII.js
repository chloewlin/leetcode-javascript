// Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

// Example:
// Input: 3
// Output:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

var generateMatrix = function(n) {
  // Create matrix filled with 0;
  let matrix = [];

  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }

  let index = 1;

  // [ 
  //   [ 0, 0, 0 ], 
  //   [ 0, 0, 0 ], 
  //   [ 0, 0, 0 ] 
  // ]

  // Fill in numbers
  // TODO
};

// Tests
console.log(generateMatrix(3));
