// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between 
// two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow 
// a node to be a descendant of itself).”

// Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]

//         _______3______
//        /              \
//     ___5__          ___1__
//    /      \        /      \
//    6      _2       0       8
//          /  \
//          7   4
// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself
//              according to the LCA definition.
// Note:

// All of the nodes' values will be unique.
// p and q are different and both values will exist in the binary tree.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;
  if (root === p || root === q) return root;

  var left = lowestCommonAncestor(root.left, p, q);
  var right = lowestCommonAncestor(root.right, p, q);
  
  if (left && right) {
    return root;
  } else if (left) {
    return left;
  } else if (right) {
    return right;
  }
};

var tree = new TreeNode(3);
tree.left = new TreeNode(5);
tree.right = new TreeNode(1);
tree.left.left = new TreeNode(6);
tree.left.right = new TreeNode(2);
tree.left.right.left = new TreeNode(7);
tree.left.right.right = new TreeNode(4);
tree.right.left = new TreeNode(0);
tree.right.right = new TreeNode(8);
// console.log(tree);
console.log(lowestCommonAncestor(tree, 5, 1)); // 3
console.log(lowestCommonAncestor(tree, 5, 4)); // 5
console.log(lowestCommonAncestor(tree, 6, 8)); // 3