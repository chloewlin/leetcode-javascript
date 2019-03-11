// Given a binary tree, return the preorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,2,3]

// Follow up: Recursive solution is trivial, could you do it iteratively?

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

const preorderTraversal = function(root) {
  let values = [];

  const traverse = function(root) {
    if (!root) return;
    values.push(root.val);
    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
  }
  traverse(root);

  return values;
};

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

console.log(preorderTraversal(tree));