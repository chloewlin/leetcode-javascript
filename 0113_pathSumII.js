// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

const pathSum = function(root, sum) {
  let result = [];

  const findPath = (root, sum, path = []) => {
    if (!root) return path;

    path.push(root.val);

    if (root.val === sum && !root.left && !root.right) {
      result.push(path.slice());
    } else {
      if (root.left) findPath(root.left, sum - root.val, path)
      if (root.right) findPath(root.right, sum - root.val, path);
    }
    path.pop();
  };
  findPath(root, sum, []);

  return result;
};

var node = new TreeNode(5);
node.left = new TreeNode(4);
node.right = new TreeNode(8);
node.left.left = new TreeNode(11);
node.left.left.left = new TreeNode(7);
node.left.left.right = new TreeNode(2);
node.right.left = new TreeNode(13);
node.right.right = new TreeNode(4);
node.right.right.left = new TreeNode(5);
node.right.right.right = new TreeNode(1);

console.log(pathSum(node, 22));