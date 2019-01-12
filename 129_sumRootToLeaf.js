// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

// An example is the root-to-leaf path 1->2->3 which represents the number 123.

// Find the total sum of all root-to-leaf numbers.

// Note: A leaf is a node with no children.

// Example:
// Input: [1,2,3]
//     1
//    / \
//   2   3
// Output: 25

// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.

// Example 2:
// Input: [4,9,0,5,1]
//     4
//    / \
//   9   0
//  / \
// 5   1
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = c.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

const sumNumbers = function(root) {
  let res = 0;

  const findSum = function(root, sum = '') {
    if (!root) return sum;
    sum += root.val.toString();
    if (!root.left && !root.right) res += Number(sum);
    if (root.left) findSum(root.left, sum);
    if (root.right) findSum(root.right, sum);
  }
  findSum(root, '');

  return res;
};

// Tests
let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
console.log(sumNumbers(tree1)); // 25

let tree = new TreeNode(4);
tree.left = new TreeNode(9);
tree.right = new TreeNode(0);
tree.left.left = new TreeNode(5);
tree.left.right = new TreeNode(1);
console.log(sumNumbers(tree)); // 1026

console.log(sumNumbers()); // 0