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


var findTilt = function(root) {
  let totalTilts = 0;
  (function nodeSum(node) {
    let leftSum = 0;
    let rightSum = 0;
    if (node.left) {
      leftSum = nodeSum(node.left);
    }
    if (node.right) {
      rightSum = nodeSum(node.right);
    }
    totalTilts += Math.abs(leftSum - rightSum);
    return leftSum + rightSum + node.val;
  })(root);
  return totalTilts;
};

var test = new TreeNode(1);
test.left = new TreeNode(2);
test.right = new TreeNode(3);
test.left.left = new TreeNode(4);
test.left.right = new TreeNode(5);
test.right.left = new TreeNode(6);
test.left.left.left = new TreeNode(7);
console.log(test);
console.log(findTilt(test));