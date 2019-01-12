// Given a complete binary tree, count the number of nodes.

// Note:
// Definition of a complete binary tree from Wikipedia:
// In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. 
// It can have between 1 and 2h nodes inclusive at the last level h.

// Example:
// Input: 
//     1
//    / \
//   2   3
//  / \  /
// 4  5 6

// Output: 6

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// Given that the input is guaranteed to be a complete tree, we can just count the nodes
const countNodes = function(root) {
  if (!root) return 0; 
  return 1 + countNodes(root.left) + countNodes(root.right);
};

// One liner
const countNodes = function(root) {
  return root === null ? 0 : 1 + countNodes(root.left) + countNodes(root.right);
};

// Tests
let t = new TreeNode(1);
t.left = new TreeNode(2);
t.right = new TreeNode(3);
t.left.left = new TreeNode(4);
t.left.right = new TreeNode(5);
t.right.left = new TreeNode(6);

console.log(countNodes(t)); // 6