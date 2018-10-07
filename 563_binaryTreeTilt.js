/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var helper = (tree) => {
  // if (!tree.left) tree.left.val = 0; // this is wrong
  // if (!tree.right) tree.right.val = 0;
  // terminating case: when the current node does not have children nodes
  if (tree.left !== null && tree.right !== null) {
    return Math.abs(tree.left.val - tree.right.val);
  }
  // recursive case: if node has children, continue to check the children
  // if (tree.val && tree.left) {
  //   helper(tree.left);
  // }
  // if (tree.val && tree.right) {
  //   helper(tree.right);
  // }
};

var findTilt = function(root) {
  let tilts = 0;
  let sumOfLeft;
  let sumOfRight 
  if (root.left) {
    sumOfLeft = helper(root.left);
    console.log(helper(root.left));
  }
  if (root.right) {
    sumOfRight = helper(root.right);
  }
  tilts = sumOfLeft + sumOfRight;
  return tilts;
};

var test = new TreeNode(1);
test.left = new TreeNode(2);
test.right = new TreeNode(3);
// test.left.left = new TreeNode(4);
// test.left.right = new TreeNode(5);
// test.right.right = new TreeNode(7);
console.log(test);
console.log('helper', helper(test));
console.log(findTilt(test));