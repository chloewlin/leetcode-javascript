// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1

// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// Solution 1: recursion 
// Strategy: in-order traversal
var kthSmallest = function(root, k) {
  var nodes = [];

  var findNodes = (root) => {
    if (!root) return null;
    if (root.left) findNodes(root.left);
    nodes.push(root.val);
    if (root.right) findNodes(root.right);
  }
  findNodes(root);

  console.log(nodes);
  return nodes[k-1];
};

var root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
console.log(root);
console.log(kthSmallest(root, 3));