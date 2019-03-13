// Given a binary tree, find the length of the longest consecutive sequence path.

// The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. 
// The longest consecutive path need to be from parent to child (cannot be the reverse).

// Example 1:

// Input:

//    1
//     \
//      3
//     / \
//    2   4
//         \
//          5

// Output: 3

// Explanation: Longest consecutive sequence path is 3-4-5, so return 3.
// Example 2:

// Input:

//    2
//     \
//      3
//     / 
//    2    
//   / 
//  1

// Output: 2 

// Explanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// TODO: fix bug
const longestConsecutive = (root) => {
  let max = 0;

  const findConsecutive = (root, parent) => {
    if (!root) return;
    if (parent !== null && root.val - parent.val === 1) {
      max += 1;
    } else {
      max = 1;
    }
    length = Math.max(length, max);
    findConsecutive(root.left, root);
    findConsecutive(root.right, root);
  }
  findConsecutive(root, null);

  return length;
};

// Tests 
console.log(longestConsecutive()); // 0

let t = new TreeNode(1);
t.right = new TreeNode(3);
t.right.left = new TreeNode(2);
t.right.right = new TreeNode(4);
t.right.right.right = new TreeNode(5);
console.log(longestConsecutive(t)); // 3

let t1 = new TreeNode(2);
t1.right = new TreeNode(3);
t1.right.left = new TreeNode(2);
t1.right.left.left = new TreeNode(1);
console.log(longestConsecutive(t1)); // 2