// Given a binary tree, return the postorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [3,2,1]

// Follow up: Recursive solution is trivial, could you do it iteratively?

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// Definition of post-order traversal: left -> right -> curr

// Solution 1: Recursive
const postorderTraversal = function(root) {
  let values = [];

  const traverse = (root) => {
    if (!root) return;
    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
    values.push(root.val);
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

console.log(postorderTraversal(tree)); // [4,5,2,6,7,3,1]