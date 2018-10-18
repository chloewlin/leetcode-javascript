// Invert a binary tree.
// Example:

// Input:
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Output:
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// Time Complexity: O(n)
var swap = function(root) {
  var temp = root.left;
  root.left = root.right;
  root.right = temp;
};

var invertTree = function(root) {
  if (!root) return null;
  swap(root);
  if (root.left) {
    invertTree(root.left);
  }
  if (root.right) {
    invertTree(root.right);
  }
  return root;
};

// Test case 1: balanced tree 
const tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(9);
console.log(invertTree(tree));

// Test case 2: unbalanced tree
// Input:
//      4
//        \
//         7
//        / \
//       6   9

// Output:
//      4
//    /   
//   7     
//  / \   
// 9   6 

const unbalancedTree = { 
  value: 4, 
  left: null, 
  right: { 
    value: 7,
    left: { value: 6 }, 
    right: { value: 9 }
  }
}
console.log(invertTree(unbalancedTree));