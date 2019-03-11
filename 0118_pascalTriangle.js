// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

var generate = function(numRows) {
  var result = [[1], [1, 1]];
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  for (var row = 2; row < numRows; row++) {
    result[row] = [1];
    for (var col = 1; col <= row - 1; col++) {
      result[row][col] = result[row - 1][col] + result[row - 1][col - 1]; 
      result[row].push(1);
    }
  } 

  return result;
};

console.log(generate(1));
console.log(generate(2));
console.log(generate(5));