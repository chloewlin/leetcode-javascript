// Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals 
// the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

// For example, 

// Given the tree:
//         4
//        / \
//       2   7
//      / \
//     1   3

// And the value to search: 2
// You should return this subtree:

//       2     
//      / \   
//     1   3
// In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

// Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var searchBST = function(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (root.val > val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};

var newTree = new TreeNode(4);
newTree.left = new TreeNode(2);
newTree.right = new TreeNode(7);
newTree.left.left = new TreeNode(1);
newTree.left.right = new TreeNode(3);

var newTree2 = new TreeNode(18);
newTree2.left = new TreeNode(2);
newTree2.right = new TreeNode(22);
newTree2.right.right = new TreeNode(63);
newTree2.right.right.right = new TreeNode(84);

console.log(searchBST(newTree, 2));
console.log(searchBST(newTree2, 63));