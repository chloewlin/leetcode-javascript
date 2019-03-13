// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input:
//     2
//    / \
//   1   3
// Output: true

// Example 2:
//     5
//    / \
//   1   4
//      / \
//     3   6
// Output: false

// Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
//              is 5 but its right child's value is 4.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

const isValidBST = function(root, min = null, max = null) {
  if (!root) return true;
  if (min !== null && root.val <= min) return false;
  if (max !== null && root.val >= max) return false;

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};

// Tests:
// 
//     2
//    / \
//   1   3
// 
// let t1 = new TreeNode(2);
// t1.left = new TreeNode(1);
// t1.right = new TreeNode(3);
// console.log(isValidBST(t1)); // true
// 
//     5
//    / \
//   1   4
//      / \
//     3   6
// 
// let t2 = new TreeNode(5);
// t2.left = new TreeNode(1);
// t2.right = new TreeNode(4);
// t2.right.left = new TreeNode(3);
// t2.right.right = new TreeNode(6); 
// console.log(isValidBST(t2)); // false
// 
//       7
//      / \
//     5   10
//    / \  / \
//   4  6 8  12
// 
// let t3 = new TreeNode(7);
// t3.left = new TreeNode(5);
// t3.right = new TreeNode(10);
// t3.left.left = new TreeNode(4);
// t3.left.right = new TreeNode(6)
// t3.right.left = new TreeNode(8);
// t3.right.right = new TreeNode(12);
// console.log(isValidBST(t3)); // true 
// 
//       7
//      / \
//     5   10
//    / \  / \
//   4  6 8  1
// 
let t4 = new TreeNode(7);
t4.left = new TreeNode(5);
t4.right = new TreeNode(10);
t4.left.left = new TreeNode(4);
t4.left.right = new TreeNode(6)
t4.right.left = new TreeNode(8);
t4.right.right = new TreeNode(1);

console.log(isValidBST(t4)); // false, because all the nodes in the right subtree of 7 must be greater than 7
