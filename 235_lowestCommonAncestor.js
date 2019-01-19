// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the 
// lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

// Example 1:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// 
//      6
//    /   \
//   2     8
//  / \   / \
// 0  4  7  9
//   / \
//  3  5
// 
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 
// Note:
// All of the nodes' values will be unique.
// p and q are different and both values will exist in the BST.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

//      6
//    /   \
//   2     8
//  / \   / \
// 0  4  7  9
//   / \
//  3  5

const lowestCommonAncestor = (root, p, q) => {
  let pPath, qPath;
  (function pathToTarget(node, path = []) {
    if (node) {
      path.push(node.val);
      if (node.val === p) {
        pPath = [...path];
      } else if (node.val === q) {
        qPath = [...path];
      }
      pathToTarget(node.left, path);
      pathToTarget(node.right, path);
      path.pop();
    }
  })(root);
  for (var i = 0; i < pPath.length; i++) {
    if (pPath[i] !== qPath[i]) break;
  }
  return pPath[i - 1];
};

let t = new TreeNode(6);
t.left = new TreeNode(2);
t.right = new TreeNode(8);
t.left.left = new TreeNode(0);
t.left.right = new TreeNode(4);
t.left.right.left = new TreeNode(3);
t.left.right.right = new TreeNode(5);
t.right.left = new TreeNode(7);
t.right.right = new TreeNode(9);

console.log(lowestCommonAncestor(t, 2, 8)); // 6
console.log(lowestCommonAncestor(t, 2, 4)); // 2
console.log(lowestCommonAncestor(t, 0, 5)); // 2