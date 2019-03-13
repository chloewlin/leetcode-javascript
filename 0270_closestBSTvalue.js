// Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

// Note:
// Given target value is a floating point.
// You are guaranteed to have only one unique value in the BST that is closest to the target.

// Example:
// Input: root = [4,2,5,1,3], target = 3.714286

//     4
//    / \
//   2   5
//  / \
// 1   3

// Output: 4

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

const closestValue = function(root, target) {
  let closest = target;
  let node = 0;
  
  const traverse = (root, target) => {
    if (!root) return;
    let diff = Math.abs(root.val - target);
    if (diff < closest) {
      closest = diff;
      node = root.val;
    }
    traverse(root.left, target);
    traverse(root.right, target);
  }
  traverse(root, target);

  return node;
};

let t = new TreeNode(4);
t.left = new TreeNode(2);
t.right = new TreeNode(5);
t.left.left = new TreeNode(1);
t.left.right = new TreeNode(3);

console.log(closestValue(t, 3.714286));
