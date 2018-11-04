// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example 1:
// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Return true.

// Example 2:
// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// Return false.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var isBalanced = function(root) {
  var result = true;

  const findDepth = (root, depth) => {
    if (result === false) {
      return;
    }
    if (!root) return depth + 1;

    let leftDepth = findDepth(root.left, depth + 1);
    let rightDepth = findDepth(root.right, depth + 1);

    let difference = Math.abs(leftDepth - rightDepth);

    if (difference > 1) {
      result = false;
    }

    return Math.max(leftDepth, rightDepth);
  }

  findDepth(root, 0);
  return result;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
root.right.right.right = new TreeNode(6);
console.log(root.right);
console.log(isBalanced(root));