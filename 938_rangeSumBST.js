// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
// The binary search tree is guaranteed to have unique values.

// Example 1:
// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32

// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

// Note:
// The number of nodes in the tree is at most 10000.
// The final answer is guaranteed to be less than 2^31.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Recursive solution
let rangeSumBST = function(root, L, R) {
  let sum = 0;
  let traverseTree = function(root, L, R) {
    if (!root) return;
    if (root.val >= L && root.val <= R) {
      sum += root.val;
    }
    if (root.val < L) return traverseTree(root.right, L, R);
    if (root.val > R) return traverseTree(root.left, L, R);
    if (root.left) traverseTree(root.left, L, R);
    if (root.right) traverseTree(root.right, L, R);
  }
  traverseTree(root, L, R);

  return sum;
};

let tree = new TreeNode(10);
tree.left = new TreeNode(5);
tree.right = new TreeNode(15);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(7);
tree.right.right = new TreeNode(18);
console.log(rangeSumBST(tree, 7, 15)); // 32

let tree2 = new TreeNode(10);
tree2.left = new TreeNode(5);
tree2.right = new TreeNode(15);
tree2.left.left = new TreeNode(3);
tree2.left.left.left = new TreeNode(1);
tree2.left.right = new TreeNode(7);
tree2.left.right.left = new TreeNode(6);
tree2.right.left = new TreeNode(13);
tree2.right.right = new TreeNode(18);
console.log(rangeSumBST(tree2, 6, 10)); // 23