// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

// Solution 1: recursive 
var numIslands = function(grid) {
  var counter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        hasVisitedIsland(grid, row, col);
        counter++;
      }
    }
  }
  
  return counter;
};

var hasVisitedIsland = function(grid, row, col) {
  // base case: row and col are out of bounds
  if (row < 0 || row > grid.length - 1 || col < 0 || col > grid[0].length - 1) {
    return;
  }

  // base case: if the current element is land
  if (grid[row][col] !== '1') {
    return;
  } 

  // place '@' when we've visited an element
  grid[row][col] = '@';

  // else, recursively check top, bottom, left, and right
  hasVisitedIsland(grid, row - 1, col);
  hasVisitedIsland(grid, row + 1, col);
  hasVisitedIsland(grid, row, col - 1);
  hasVisitedIsland(grid, row, col + 1);
};

var islandOne = [
  ['1','1','1','1','0'],
  ['1','1','0','1','0'],
  ['1','1','0','0','0'],
  ['0','0','0','0','0']
];

var islandTwo = [
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
];

console.log(numIslands(islandOne)); // returns 1
console.log(numIslands(islandTwo)); // returns 3