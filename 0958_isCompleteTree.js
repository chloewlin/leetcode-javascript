// Check if a binary tree is a complete tree.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

const isCompleteTree = (root) => {
  let isComplete = true;

  const traverse = (root) => {
    if (!root) return;
    if (!root.left && root.right) isComplete = false;
    traverse(root.left);
    traverse(root.right);
  };
  traverse(root);

  console.log(isComplete);
};

// Example 1: 
// Input: 
//     1
//    / \
//   2   3
//  / \ / 
// 4  5 6  
// Output: true
var tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);

console.log(isCompleteTree(tree)); // true

// Example 2: 
// Input: 
//     1
//    / \
//   2   3
//  / \   \ 
// 4  5   7
// Output: false
var tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
tree2.left.left = new TreeNode(4);
tree2.left.right = new TreeNode(5);
tree2.right.right = new TreeNode(7);

console.log(isCompleteTree(tree2)); // false

// Example 3: 
// Input: 
//     1
//    / \
//   2   3
//    \   \ 
//    5   7
// Output: false
var tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);
tree3.right = new TreeNode(3);
tree3.left.right = new TreeNode(5);
tree3.right.right = new TreeNode(7);

console.log(isCompleteTree(tree3)); // false