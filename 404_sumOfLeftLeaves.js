// Find the sum of all left leaves in a given binary tree.

// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var sumOfLeftLeaves = function(root, isLeft = false) {
  if (!root) return 0;
  if (!root.left && !root.right) return isLeft ? root.val : 0;
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};

var sumOfLeftLeaves1 = (root) => {
  let all = 0;

  const sum = (root, isLeft = false) => {
    if (!root) return 0;
    if (!root.left && !root.right) {
      if (isLeft) all += root.val;
    }
    sum(root.left, true);
    sum(root.right, false); 
  }
  sum(root);

  return all;
}

let t = new TreeNode(3);
t.left = new TreeNode(9);
t.right = new TreeNode(20);
t.right.left = new TreeNode(15);
t.right.right = new TreeNode(7);

//     1
//    / \
//   2  3
//  / \
// 4  5 

let t1 = new TreeNode(1);
t1.left = new TreeNode(2);
t1.right = new TreeNode(3);
t1.left.left = new TreeNode(4);
t1.left.right = new TreeNode(5);

console.log(sumOfLeftLeaves()); // 0
console.log(sumOfLeftLeaves(t)); // 9 + 15 = 24
console.log(sumOfLeftLeaves(t1)); // 4 
console.log(sumOfLeftLeaves1(t)); // 9 + 15 = 24
console.log(sumOfLeftLeaves1(t1)); // 4 