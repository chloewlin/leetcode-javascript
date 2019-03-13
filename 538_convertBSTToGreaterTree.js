// Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to 
// the original key plus sum of all keys greater than the original key in BST.

// Example:

// Input: The root of a Binary Search Tree like this:
//               5
//             /   \
//            2     13

// Output: The root of a Greater Tree like this:
//              18
//             /   \
//           20     13

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var convertBST = function(root) {
  let sum = 0;

  (function traverse(root) {
    if (!root) return;
    traverse(root.right);
    sum += root.val;
    root.val = sum;
    traverse(root.left);
  })(root)
 
  return root;
};

// Tests
let t = new TreeNode(5);
t.left = new TreeNode(2);
t.right = new TreeNode(13);
t.left.left = new TreeNode(1);
console.log(convertBST(t));
//              18
//             /   \
//           20     13
//           /
//         21
