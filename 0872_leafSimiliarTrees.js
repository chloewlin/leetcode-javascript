function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

let getAllLeaves = function(root) {
  let allLeaves = [];

  let getLeaves = function(root) {
    if (!root.left && !root.right) {
      allLeaves.push(root.val);
    }
    if (root.left) getLeaves(root.left);
    if (root.right) getLeaves(root.right);
  }
  getLeaves(root);

  return allLeaves;
};

let leafSimilar = function(root1, root2) {
  let leaves1 = getAllLeaves(root1);
  let leaves2 = getAllLeaves(root2);
  
  if (leaves1.length === leaves2.length) {
    for (let i = 0; i < leaves1.length; i++) {
      if (leaves1[i] !== leaves2[i]) {
        return false;
      }
    }
  } 
  return true;
};

let root1 = new TreeNode(3);
root1.left = new TreeNode(5);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(6);
root1.left.right = new TreeNode(2);
root1.left.right.left = new TreeNode(7);
root1.left.right.right = new TreeNode(4);
root1.right.left = new TreeNode(9);
root1.right.right= new TreeNode(8);
let root2 = new TreeNode(3);
root2.left = new TreeNode(5);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(6);
root2.left.right = new TreeNode(2);
root2.left.right.left = new TreeNode(7);
root2.left.right.right = new TreeNode(4);
root2.right.left = new TreeNode(9);
root2.right.right= new TreeNode(8);
// console.log(getAllLeaves(root1));
console.log(leafSimilar(root1, root2));