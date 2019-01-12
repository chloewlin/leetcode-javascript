// A binary tree is univalued if every node in the tree has the same value.

// Return true if and only if the given tree is univalued.

// Example 1:
// Input: [1,1,1,1,1,null,1]
// Output: true

// Example 2:
// Input: [2,2,2,5,2]
// Output: false
 
// Note:
// The number of nodes in the given tree will be in the range [1, 100].
// Each node's value will be an integer in the range [0, 99].

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

const isUnivalTree = (root) => {
  if (!root) return false;   
  let univalue = root.val;
  let res = true;
  
  const check = (root) => {
    if (!root) return;
    if (root.val !== univalue) res = false;
    check(root.left);
    check(root.right);
  }
  check(root);

  return res;
};

// Tests

let t = new TreeNode(1);
t.left = new TreeNode(1);
t.right = new TreeNode(1);

console.log(isUnivalTree(t)); // true

let f = new TreeNode(2);
f.left = new TreeNode(2);
f.right = new TreeNode(2);
f.left.left = new TreeNode(5);
f.left.right = new TreeNode(2);

console.log(isUnivalTree(f)); // false

console.log(isUnivalTree()); // false