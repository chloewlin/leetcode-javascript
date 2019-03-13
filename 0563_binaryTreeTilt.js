// Given a binary tree, return the tilt of the whole tree.

// The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node 
// values and the sum of all right subtree node values. Null node has tilt 0.

// The tilt of the whole tree is defined as the sum of all nodes' tilt.

// Example:
// Input: 
//          1
//        /   \
//       2     3
// Output: 1
// Explanation: 
// Tilt of node 2 : 0
// Tilt of node 3 : 0
// Tilt of node 1 : |2-3| = 1
// Tilt of binary tree : 0 + 0 + 1 = 1

// Note:
// The sum of node values in any subtree won't exceed the range of 32-bit integer.
// All the tilt values won't exceed the range of 32-bit integer.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

const findTilt2 = (root) => {
  let total = 0;

  const findSum = (root) => {
    if (!root) return 0;
    let left = findSum(root.left);
    let right = findSum(root.right);
    total += Math.abs(left - right);
    return left + right + root.val;
  }
  findSum(root);

  return total;
};

// Tests 
// 
//       1
//     /  \
//    2    3
//   / \  / \
//  4  5 6  7
let t = new TreeNode(1);
t.left = new TreeNode(2);
t.right = new TreeNode(3);
t.left.left = new TreeNode(4);
t.left.right = new TreeNode(5);
t.right.left = new TreeNode(6);
t.left.left.left = new TreeNode(7);

//          1
//        /   \
//       2     3
let t1 = new TreeNode(1);
t1.left = new TreeNode(2);
t1.right = new TreeNode(3);

// console.log(findTilt(t)); // 28
console.log(findTilt2(t)); // 28
// console.log(findTilt(t1)); // 1
console.log(findTilt2(t1)); // 1