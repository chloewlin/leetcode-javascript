// For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

// A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip 
// operations.

// Write a function that determines whether two binary trees are flip equivalent.  The trees are given by root nodes root1 
// and root2.


// Example 1:
// Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]

//          1                                    1
//         / \                                  / \
//        2   3                                3   2
//       / \  /                                \  / \
//      4  5 6                                 6 4  5
//        / \                                      / \
//       7  8                                     8  7

// Output: true
// Explanation: We flipped at nodes with values 1, 3, and 5.
// Flipped Trees Diagram
 
// Note: 
// Each tree will have at most 100 nodes.
// Each value in each tree will be a unique integer in the range [0, 99].

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// Recursive solution
const flipEquiv = function(root1, root2) {
  if (!root1 && !root2) return true; 
  if (!root1 || !root2 || root1.val !== root2.val) return false; 
  return flipEquiv(root1.left, root2.left) && flipEquiv(root1.right,root2.right) || flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);
};

// Tests
let t = new TreeNode(1);
t.left = new TreeNode(2);
t.right = new TreeNode(3);
t.left.left = new TreeNode(4);
t.left.right = new TreeNode(5);
t.left.right.left = new TreeNode(7);
t.left.right.right = new TreeNode(8);
t.right.left = new TreeNode(6);

let p = new TreeNode(1);
p.left = new TreeNode(3);
p.right = new TreeNode(2);
p.left.right = new TreeNode(6);
p.right.left = new TreeNode(4);
p.right.right = new TreeNode(5);
p.right.right.left = new TreeNode(8);
p.right.right.right = new TreeNode(7);

console.log(flipEquiv(t, p)); // true
console.log(flipEquiv(null, null)); // true