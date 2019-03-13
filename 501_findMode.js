// Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// For example:
// Given BST [1,null,2,2],

//    1
//     \
//      2
//     /
//    2
 

// return [2].

// Note: If a tree has more than one mode, you can return them in any order.

// Follow up: Could you do that without using any extra space? 
// (Assume that the implicit stack space incurred due to recursion does not count).

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// TODO: complete the func
var findMode = function(root) {
  let hash = {};
  let ans = [];

  (function find(node){
    if (!node) return;
    if (!hash[node.val]) {
      hash[node.val] = 1;
    } else {
      hash[node.val]++;
    }
    find(node.right);
    find(node.left);
  })(root);

  let maxFrequency = Math.max(...Object.values(hash));
  
  for (let key in hash) {
    if (hash[key] === maxFrequency) ans.push(+key);
  }

  return ans;
};

let t = new TreeNode(1);
t.right = new TreeNode(2);
t.right.left = new TreeNode(2);

let t1 = new TreeNode(5);
t1.left = new TreeNode(2)
t1.left.left = new TreeNode(2)
t1.right = new TreeNode(6);
t1.right.left = new TreeNode(6);

console.log(findMode(t));
console.log(findMode(t1));
