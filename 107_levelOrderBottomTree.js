// Given a binary tree, return the bottom-up level order traversal of its nodes' values. 
// (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var levelOrderBottom = function(root) {
  var result = [];
  var level = 0;
  
  var BFT = function(root, level) {
    if (!root) return;
    if (level >= result.length) {
      result[level] = [];
    };

    result[level].push(root.val);

    BFT(root.left, level + 1);
    BFT(root.right, level + 1);
  }
  BFT(root, 0);

  return result.reverse();
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
// console.log(root);
console.log(levelOrderBottom(root));
// [[6],
//  [4,5],
//  [2,3],
//  [1]]