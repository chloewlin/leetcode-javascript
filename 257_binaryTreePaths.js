// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.
// Example:

// Input:
//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]
// Explanation: All root-to-leaf paths are: 1 -> 2 -> 5, 1 -> 3

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var binaryTreePaths = function(root) {
  if (!root) return [];

  var result = [];

  var helper = function(root, path) {
    path += root.val.toString();

    if (!root.left && !root.right) {
      result.push(path);
      return root.val.toString();
    }
    if (root.left) helper(root.left, path + "->");
    if (root.right) helper(root.right, path + "->");
  }
  helper(root, "");

  return result;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
console.log(root);
console.log(binaryTreePaths(root));