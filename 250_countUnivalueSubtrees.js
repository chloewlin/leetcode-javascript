// Given a binary tree, count the number of uni-value subtrees.

// A Uni-value subtree means all nodes of the subtree have the same value.

// Example :

// Input:  root = [5,1,5,5,5,null,5]

//               5
//              / \
//             1   5
//            / \   \
//           5   5   5

// Output: 4

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

const countUnivalSubtrees = (root) => {
  // TODO: fix bug
  if (!root) return 0;
  let count = 0;

  const traverse = (node) => {
    if (!node) return 0;
    if (node.val === node.left.val) count++;
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root.left);
  traverse(root.right);

  return count;
};

let t = new TreeNode(5);
t.left = new TreeNode(1);
t.right = new TreeNode(5);
t.left.left = new TreeNode(5);
t.left.right = new TreeNode(5);
t.right.right = new TreeNode(5);

console.log(countUnivalSubtrees(t)); // 4