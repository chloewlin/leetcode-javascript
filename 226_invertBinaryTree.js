function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var swap = function(root) {
  var temp = root.left;
  root.left = root.right;
  root.right = temp;
};

var invertTree = function(root) {
  if (!root) return null;
  swap(root);
  if (root.left) {
    invertTree(root.left);
  }
  if (root.right) {
    invertTree(root.right);
  }
  return root;
};

const tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(9);
console.log(invertTree(tree));