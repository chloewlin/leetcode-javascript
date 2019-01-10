// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.


// Recursive solutions
// Solution 1: 
// Time Complexity: O(n)
var maxDepth = function(root, depth = 1) {
  if (!root) return 0;
  if (!root.left && !root.right) return depth;
  return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1));
};

// Solution 2:
// Time Complexity: O(n)
var maxDepth = function(root, depth = 0) {
  if (!root) return depth;
  var left = maxDepth(root.left, depth + 1);
  var right = maxDepth(root.right, depth + 1);
  return Math.max(left, right);
}

// Solution 3: 
var maxDepth = function(root) {
  if (!root) return 0;
  var left = maxDepth(root.left);
  var right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};