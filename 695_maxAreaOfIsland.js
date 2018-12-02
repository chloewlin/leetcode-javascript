// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 
// 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]

// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

// Example 2:
// [[0,0,0,0,0,0,0,0]]

// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

// Solution 1: Recursive
// Time Complexity: O(n) - n is the product of the number of rows mutiplies the number of columns
// Space Complexity: constant
var maxAreaOfIsland = function(grid) {
  var maxArea = 0;

  for (var row = 0; row < grid.length; row++) {
    for (var col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        var currentArea = countArea(grid, row, col);
        if (currentArea > maxArea) {
          maxArea = currentArea;
        }
      }
    }
  }
  
  return maxArea;
};


var countArea = function(grid, row, col) {
  var area = 0;

  // base base: when we're out of bounds
  if (row < 0 || row > grid.length - 1 || col < 0 || col > grid[0].length - 1 || grid[row][col] !== 1) {
    return 0;
  }

  area++;
  grid[row][col] = '@'; // mark the current land as visited

  // recursive case: 
  area += countArea(grid, row - 1, col); // top
  area += countArea(grid, row + 1, col); // bottom
  area += countArea(grid, row, col - 1); // left
  area += countArea(grid, row, col + 1); // right

  return area;
};

var continentOne = [
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
];

console.log(maxAreaOfIsland(continentOne));