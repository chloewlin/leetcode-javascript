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

// Solution 1: Pure recursion
var sumOfLeftLeaves = function(root, isLeft = false) {
  if (!root) return 0;
  if (!root.left && !root.right) return isLeft ? root.val : 0;
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};

// Solution 2: Inner recursion
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

// Solution 3: Iterative (Use stack)
var sumOfLeftLeavesIterative = root => {
  let sum = 0;
  if (!root) return 0;
  const stack = [[root, false]];
  while (stack.length) {
      var curr = stack.pop();
      if (!curr[0].left && !curr[0].right) sum += curr[1] ? curr[0].val : 0;
      if (curr[0].left) stack.push([curr[0].left, true]);
      if (curr[0].right) stack.push([curr[0].right, false]);
  }
  return sum;
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
console.log(sumOfLeftLeaves1(t)); // 24
console.log(sumOfLeftLeaves1(t1)); // 4 
console.log(sumOfLeftLeavesIterative(t)); // 24
console.log(sumOfLeftLeavesIterative(t1)); // 4