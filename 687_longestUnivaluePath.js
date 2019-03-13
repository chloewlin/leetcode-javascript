// Given a binary tree, find the length of the longest path where each node in the path has the same value. 
// This path may or may not pass through the root.

// Note: The length of path between two nodes is represented by the number of edges between them.

// Example 1:

// Input:

//               5
//              / \
//             4   5
//            / \   \
//           1   1   5
// Output:
// 2

// Example 2:
// Input:

//               1
//              / \
//             4   5
//            / \   \
//           4   4   5
// Output:
// 2
// Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.

const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

// TODO: debug
var longestUnivaluePath = function(root) {
  let max = 0;

  var findPath = function(root, parent, edges) {
    if (!root || !parent) return;
    console.log(root.val, parent.val)
    if (root.val === parent.val) edges + 1;
    if (root.val === parent.val) edges + 1;
    max = Math.max(max, edges);
    findPath(root.left, root, edges);
    findPath(root.right, root, edges);
  };
  findPath(root, null, 0);

  return max;
};

// Tests
let t = new TreeNode(5);
t.left = new TreeNode(4);
t.right = new TreeNode(5);
t.left.left = new TreeNode(1);
t.left.right = new TreeNode(1);
t.right.right = new TreeNode(5);

console.log(longestUnivaluePath(t)); // 2
