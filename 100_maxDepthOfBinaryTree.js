// Recursive solution
// Time Complexity: O(n)
var maxDepth = function(root, depth = 1) {
  if (!root) return 0;
  if (!root.left && !root.right) return depth;
  return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1));
};