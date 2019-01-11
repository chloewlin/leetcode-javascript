// Given a binary tree, return the zigzag level order traversal of its nodes' values. 
// (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]
const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

const zigzagLevelOrder = function(root) {
  let res = [];
  
  let traverse = (root, depth = 0) => {
    if (!root) return;
    if (depth >= res.length) {
      res[depth] = [];
    }
    if (depth % 2 === 0) res[depth].push(root.val);
    else if (depth % 2 !== 0) res[depth].unshift(root.val);
    
    if (root.left) traverse(root.left, depth + 1);
    if (root.right) traverse(root.right, depth + 1);
  }
  traverse(root, 0);

  return res;
};

// Tests
let t = new TreeNode(3);
t.left = new TreeNode(20);
t.right = new TreeNode(9);
t.right.left = new TreeNode(15);
t.right.right = new TreeNode(7);
t.right.left = new TreeNode(15);
t.right.right.left = new TreeNode(6);
t.right.right.right = new TreeNode(8);

console.log(zigzagLevelOrder(t));