// Recursive solution
// Time Complexity: O(n)
var maxDepth = function(root, depth = 1) {
  if (!root) return 0;
  if (!root.left && !root.right) return depth;
  return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1));
};

// Solution 2
// Time Complexity: O(n)
var maxDepth = function(root, depth = 0) {
  // if there is only one node
  if (!root.left && !root.right) return depth + 1;
  // terminating case
  if (!root) return depth;
  // recursive case
  var left = maxDepth(root.left, depth + 1);
  var right = maxDepth(root.right, depth + 1);
  return Math.max(left, right);
}