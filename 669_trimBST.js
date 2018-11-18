function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var trimBST = function(root, L, R) {
  if (!root) return null;
  if (root.val < L) return trimBST(root.right, L, R);
  if (root.val > R) return trimBST(root.left, L, R);
  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  return root;
};

var newTree = new TreeNode(1);
newTree.left = new TreeNode(0);
newTree.right = new TreeNode(2);

console.log(trimBST(newTree, 1, 2));