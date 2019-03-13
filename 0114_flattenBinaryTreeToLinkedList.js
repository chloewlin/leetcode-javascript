// Given a binary tree, flatten it to a linked list in-place.

// For example, given the following tree:

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
//
// The flattened tree should look like:

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6

const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

var flatten = function(root) {
  // TODO
};

// Tests
let t = new TreeNode(1);
t.left = new TreeNode(2);
t.right = new TreeNode(5);
t.left.left = new TreeNode(3);
t.left.right = new TreeNode(4);
t.right.right = new TreeNode(5);

console.log(flatten(t));
