function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// Time Complexity: O(logN)
var hasPathSum = function(root, target) {
  if (!root) return false;
  function helper(root, currSum) {
    currSum = currSum + root.val;
    if (!root.left && !root.right) {
      return currSum === target;
    }
    if (root.left) {
      if (helper(root.left, currSum)) return true;
    }
    if (root.right) {
      return helper(root.right, currSum);
    }
    return false;
  };
  return helper(root, 0);
};

var node = new TreeNode(5);
node.left = new TreeNode(4);
node.right = new TreeNode(8);
node.left.left = new TreeNode(11);
node.left.left.left = new TreeNode(7);
node.left.left.right = new TreeNode(2);
node.right.left = new TreeNode(13);
node.right.right = new TreeNode(4);
node.right.right.right = new TreeNode(1);
// console.log(node);
console.log(hasPathSum(node, 22));
var node1 = new TreeNode(1);
console.log(hasPathSum(node1, 0));