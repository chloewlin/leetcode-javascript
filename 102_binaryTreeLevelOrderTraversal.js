// Given a binary tree, return the level order traversal of its nodes' values. 
// (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var levelOrder = function(root) {
  var result = [];
  
  function traverseLevel(root, depth) {
    if (!root) return;
    if (depth >= result.length) {
      result[depth] = [];
    }
    result[depth].push(root.val);
    
    if (root.left) traverseLevel(root.left, depth + 1);
    if (root.right) traverseLevel(root.right, depth + 1);
  }; 
  traverseLevel(root, 0);

  return result;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(root);
console.log(levelOrder(root));