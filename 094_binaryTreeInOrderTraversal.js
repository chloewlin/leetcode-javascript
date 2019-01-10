// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:
// Input: [1,null,2,3]
//
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
//
// Follow up: Recursive solution is trivial, could you do it iteratively?

const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

// Solution 1: Inner Recursive Function
var inorderTraversal1 = function(root) {
  let res = [];

  let findNode = function (node) {
    if (!node) return; 
    if (node.left) findNode(node.left);
    res.push(node.val);
    if (node.right) findNode(node.right);
  }
  findNode(root);

  return res;
};

// We can also rewrite the above solution this way
var inorderTraversal2 = function(root, res = []) {
  let findNode = function (node) {
    if (node) {
      node.left && findNode(node.left);
      res.push(node.val);
      node.right && findNode(node.right);
    }
  }
  findNode(root);

  return res;
};

// Solution 2: Pure Recursive Function
var inorderTraversal3 = function(root, res = []) {
  if (!root) return res;
  let left, right;
  if (root.left) left = inorderTraversal3(root.left, res);
  res.push(root.val);
  if (root.right) right = inorderTraversal3(root.right, res);
  return res;
};

let t = new TreeNode(1);
t.left = new TreeNode(2);
t.right = new TreeNode(3);
t.right.left = new TreeNode(4);
t.right.right = new TreeNode(5);

console.log(inorderTraversal3(t)); // [2, 1, 4, 3, 5 ]
console.log(inorderTraversal3()); // []