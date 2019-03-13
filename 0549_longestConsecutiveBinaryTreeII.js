// Given a binary tree, you need to find the length of Longest Consecutive Path in Binary Tree.

// Especially, this path can be either increasing or decreasing. For example, [1,2,3,4] and [4,3,2,1] are both considered valid, 
// but the path [1,2,4,3] is not valid. On the other hand, the path can be in the child-Parent-child order, and not necessarily 
// be parent-child order.

// Example 1:
// Input:
//         1
//        / \
//       2   3
// Output: 2
// Explanation: The longest consecutive path is [1, 2] or [2, 1].

// Example 2:
// Input:
//         2
//        / \
//       1   3
// Output: 3
// Explanation: The longest consecutive path is [1, 2, 3] or [3, 2, 1].

// Note: All the values of tree nodes are in the range of [-1e7, 1e7].

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var longestConsecutive = function(root) {
  let values = [];
  let consecutive = [];

  const findConsecutive = (root) => {
    if (!root) return;
    findConsecutive(root.left);
    values.push(root.val);
    findConsecutive(root.right);
  }
  findConsecutive(root);
  console.log(values);

  for (let i = 0; i <= values.length; i++) {
    if (values[i + 1]) {
      if (values[i + 1] !== values[i] + 1) continue;
      else consecutive.push(values[i]);
    }
  }

  console.log(consecutive);
  // TODO: complete the func
};

// Tests
//         1
//        / \
//       2   3
let t1 = new TreeNode(1);
t1.left = new TreeNode(2);
t1.right = new TreeNode(3);
console.log(longestConsecutive(t1)); // 2 ([1,2] or [2,1])

//         2
//        / \
//       1   3
let t2 = new TreeNode(2);
t2.left = new TreeNode(1);
t2.right = new TreeNode(3);
console.log(longestConsecutive(t2)); // 3 ([1,2,3] or [3,2,1])

//       5
//      / \
//     4  6
//    /    \
//   3     7
//   /      \
//  2       8
//  /        \
// 1         9
let t3 = new TreeNode(5);
t3.left = new TreeNode(4);
t3.left.left = new TreeNode(3);
t3.left.left.left = new TreeNode(2);
t3.left.left.left.left = new TreeNode(1);
t3.right = new TreeNode(6);
t3.right.right = new TreeNode(7);
t3.right.right.right = new TreeNode(8);
t3.right.right.right.right = new TreeNode(9);
console.log(longestConsecutive(t3)); // 9 ([1,2,3,4,5,6,7,8,9] or [9,8,7,6,5,4,3,2,1])

//       5
//      / \
//     4  6
//    /    \
//   3     -7
//   /      \
//  20      -8
//  /        \
// 1         9
let t4 = new TreeNode(5);
t4.left = new TreeNode(4);
t4.left.left = new TreeNode(3);
t4.left.left.left = new TreeNode(20);
t4.left.left.left.left = new TreeNode(1);
t4.right = new TreeNode(6);
t4.right.right = new TreeNode(7);
t4.right.right.right = new TreeNode(-8);
t4.right.right.right.right = new TreeNode(9);
console.log(longestConsecutive(t4)); // 4 ([3,4,5,6] or [6,5,4,3])
