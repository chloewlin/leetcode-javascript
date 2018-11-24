// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest 
// path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree 
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var diameterOfBinaryTree = function(root) {
  var diameter = 0;
  if (!root) return 0;

  var findDeepestLevel = function(root, level) {
    if (!root.left && !root.right) return 0;
    var left = 0;
    var right = 0;
    if (root.left) left = findDeepestLevel(root.left) + 1;
    if (root.right) right = findDeepestLevel(root.right) + 1;  
    diameter = Math.max(diameter, left + right);
    return Math.max(left, right);
  };
  findDeepestLevel(root);
  
  return diameter;
};

// Example 0: 
//           1
var newTree0 = new TreeNode(1);

// Example 1: 
//           1
//          / 
//         2   
var newTree1 = new TreeNode(1);
newTree1.left = new TreeNode(2);

// Example 2: 
//           1
//          / \
//         2   3
var newTree2 = new TreeNode(1);
newTree2.left = new TreeNode(2);
newTree2.right = new TreeNode(3);

// Example 3: 
//           1
//          / \
//         2   3
//        / \     
//       4   5 
var newTree3 = new TreeNode(1);
newTree3.left = new TreeNode(2);
newTree3.right = new TreeNode(3);
newTree3.left.left = new TreeNode(4);
newTree3.left.right = new TreeNode(5);

// Example 3: 
//           1
//          / \
//         2   3
//        / \     
//       4   5 
//      /
//     6
var newTree4 = new TreeNode(1);
newTree4.left = new TreeNode(2);
newTree4.right = new TreeNode(3);
newTree4.left.left = new TreeNode(4);
newTree4.left.right = new TreeNode(5);
newTree4.left.left.left = new TreeNode(6);

// Example 4: 
//           4
//          / 
//         2   
//        / \          
//       3   1     
//      /    
//     5
var newTree5 = new TreeNode(4);
newTree5.left = new TreeNode(2);
newTree5.left.left = new TreeNode(3);
newTree5.left.right = new TreeNode(1);
newTree5.left.left.left = new TreeNode(5);

console.log(diameterOfBinaryTree(newTree0)); // returns 0
console.log(diameterOfBinaryTree(newTree1)); // returns 1
console.log(diameterOfBinaryTree(newTree2)); // returns 2
console.log(diameterOfBinaryTree(newTree3)); // returns 3
console.log(diameterOfBinaryTree(newTree4)); // returns 4
console.log(diameterOfBinaryTree(null)); // returns 0
console.log(diameterOfBinaryTree(newTree5)); // returns 3