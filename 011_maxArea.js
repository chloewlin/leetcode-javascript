// G iven n non-negative integers a1, a2, ..., an , where each represents a point at coordinate 
// (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and 
// (i, 0). Find two lines, which together with x-axis forms a container, such that the container 
// contains the most water.
// Note: You may not slant the container and n is at least 2. 

// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, 
// the max area of water (blue section) the container can contain is 49.

// Solution 1: Brute Force
// Time Complexity: O(n2)
var maxArea = function(heightArr) {
  var maxArea = 0; area = 0; left = 0; right = 0;

  for (var i = 0; i < heightArr.length; i++) {
    left = heightArr[i];
    for (var j = i + 1; j < heightArr.length; j++) {
      right = heightArr[j];
      if (right > left) {
        area = Math.abs(j - i) * left;
      } else if (left > right) {
        area = Math.abs(i - j) * right;
      } else if (left = right) {
        area = Math.abs(j - i) * left;
      }
      // console.log('left:', left, 'right:', right, 'area:', area);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  
  return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1
console.log(maxArea([1,2,1])); // 2;