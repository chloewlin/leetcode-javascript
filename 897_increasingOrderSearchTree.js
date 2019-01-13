// Given a tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, 
// and every node has no left child and only 1 right child.

// Example 1:
// Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]
//        5
//       / \
//     3    6
//    / \    \
//   2   4    8
//  /        / \ 
// 1        7   9

// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

//  1
//   \
//    2
//     \
//      3
//       \
//        4
//         \
//          5
//           \
//            6
//             \
//              7
//               \
//                8
//                 \
//                  9  
// Note:
// The number of nodes in the given tree will be between 1 and 100.
// Each node will have a unique integer value from 0 to 1000.


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// Recursive solution
// Time Complexity: O(n)
// Space Complexity: O(n)
const increasingBST = (root) => {
  let values = [];
  let head = new TreeNode();
  let p = head;

  const inorderTraversal = (root) => {
    if (!root) return;
    inorderTraversal(root.left);
    values.push(root.val);
    inorderTraversal(root.right);
  }
  inorderTraversal(root);

  for (let val of values) {
    p.right = new TreeNode(val);
    p = p.right;
  }

  return head.right;
};

let t = new TreeNode(5);
t.left = new TreeNode(3);
t.right = new TreeNode(6);
t.left.left = new TreeNode(2);
t.left.right = new TreeNode(4);
t.left.left.left = new TreeNode(1);
t.right.right = new TreeNode(8);
t.right.right.left = new TreeNode(7);
t.right.right.right = new TreeNode(9);

console.log(increasingBST(t));