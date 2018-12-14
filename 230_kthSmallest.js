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

// Solution 2: recursion - ES6
let kthSmallest = (root, k) => {  
  return convertBTtoArray(root)[k - 1];
};

let convertBTtoArray = (node) => {
  if (!node) return [];
  return [...convertBTtoArray(node.left), node.val, ...convertBTtoArray(node.right)];
};

// Solution 3: iterative
let kthSmallest = (root, k) => {
  let stack = [];
  let count = 0;
  let node = root;
  
  while (true) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      if (stack.length === 0) break;
      node = stack.pop();
      count++;
      if (count === k) return node.val;
      node = node.right;
    }
  }
};

var tree1 = new TreeNode(5);
tree1.left = new TreeNode(3);
tree1.right = new TreeNode(6);
tree1.left.left = new TreeNode(2);
tree1.left.right = new TreeNode(4);
tree1.left.left.left = new TreeNode(1);

var tree2 = new TreeNode(3);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(4);
tree2.left.right = new TreeNode(2);

// console.log(kthSmallest(tree1, 3)); // 3
console.log(kthSmallest(tree2, 2)); // 2