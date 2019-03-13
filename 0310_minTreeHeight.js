const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

// function height(root, depth = 0){
//   if (!root) {
//     return depth;
//   }
//   let left = height(root.left, depth + 1);
//   let right = height(root.right, depth + 1);

//   return Math.max(left, right);
// }

// TODO: fix bug
var maxDepth = function(root, depth = 0) {
  if (!root) return depth;
  var left = maxDepth(root.left, depth + 1);
  var right = maxDepth(root.right, depth + 1);
  return Math.max(left, right);
};

// Tests
let t = new TreeNode(1);
t.left = new TreeNode(2);
t.right = new TreeNode(3);
t.left.left = new TreeNode(4);
t.left.right = new TreeNode(5);

// console.log(height(t));
console.log(maxDepth(t)); // 3
