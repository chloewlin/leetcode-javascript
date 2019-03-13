// Given a binary tree where every node has a unique value, and a target key k, find the value of the nearest leaf 
// node to target k in the tree.

// Here, nearest to a leaf means the least number of edges travelled on the binary tree to reach any leaf of the 
// tree. Also, a node is called a leaf if it has no children.

// In the following examples, the input tree is represented in flattened form row by row. The actual root tree 
// given will be a TreeNode object.

// Example 1:
// Input:
// root = [1, 3, 2], k = 1
// Diagram of binary tree:
//           1
//          / \
//         3   2

// Output: 2 (or 3)
// Explanation: Either 2 or 3 is the nearest leaf node to the target of 1.

// Example 2:
// Input:
// root = [1], k = 1
// Output: 1
// Explanation: The nearest leaf node is the root node itself.

// Example 3:
// Input:
// root = [1,2,3,4,null,null,null,5,null,6], k = 2
// Diagram of binary tree:
//              1
//             / \
//            2   3
//           /
//          4
//         /
//        5
//       /
//      6

// Output: 3
// Explanation: The leaf node with value 3 (and not the leaf node with value 6) is nearest to the node with value 2.

// Note:
// root represents a binary tree with at least 1 node and at most 1000 nodes.
// Every node has a unique node.val in range [1, 1000].
// There exists some node in the given binary tree for which node.val == k.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

var findClosestLeaf = function(root, k) {
  let edgesTravelled = 0;
  let closestLeaf = null;

  const find = (root, target) => {
    if (!root) return 0;
    if (root.val === target && !root.left && !root.right) closestLeaf = root.val;
    if (root.val === target)
  };
  find(root, k);

  // TODO: debug & complete code
};

// Tests
let t = new TreeNode(1);
t.left = new TreeNode(3);
t.right = new TreeNode(2);

let t1 = new TreeNode(1);

let t2 = new TreeNode(1);
t2.left = new TreeNode(2);
t2.right = new TreeNode(3);
t2.left.left = new TreeNode(4);
t2.left.left.left = new TreeNode(5);
t2.left.left.left.left = new TreeNode(6);

console.log(findClosestLeaf(t, 1)); // 2 or 3
console.log(findClosestLeaf(t1, 1)); // 1
console.log(findClosestLeaf(t2, 2)); // 3
