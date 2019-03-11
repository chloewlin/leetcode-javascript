// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node 
// values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's 
// descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:
//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4 
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.

// Example 2:
// Given tree s:
//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};


var isIdentical = function(root1, root2) {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;
  return root1.val === root2.val && isIdentical(root1.left, root2.left) && isIdentical(root1.right, root2.right);
};


var isSubtree = function(s, t) {
  if (s === null || t === null) return false;
  return isIdentical(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

var newTree = new TreeNode(3);
newTree.left = new TreeNode(4);
newTree.right = new TreeNode(5);
newTree.left.left = new TreeNode(1);
newTree.left.right = new TreeNode(2);

var newTree2 = new TreeNode(3);
newTree2.left = new TreeNode(4);
newTree2.right = new TreeNode(5);
newTree2.left.left = new TreeNode(1);
newTree2.left.right = new TreeNode(2);
newTree2.left.right.left = new TreeNode(0);

var subTree = new TreeNode(4);
subTree.left = new TreeNode(1);
subTree.right = new TreeNode(2);

var subTree2 = new TreeNode(4);
subTree2.left = new TreeNode(1);
subTree2.right = new TreeNode(2);
subTree2.right.right = new TreeNode(0);

console.log(isIdentical(subTree, subTree2)); // false
console.log(isSubtree(newTree, subTree)); // true
console.log(isSubtree(newTree2, subTree)); // false