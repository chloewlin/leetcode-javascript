// Given a binary tree, return the values of its boundary in anti-clockwise direction starting from root. 
// Boundary includes left boundary, leaves, and right boundary in order without duplicate nodes.

// Left boundary is defined as the path from root to the left-most node. Right boundary is defined as the
// path from root to the right-most node. If the root doesn't have left subtree or right subtree, then 
// the root itself is left boundary or right boundary. Note this definition only applies to the input 
// binary tree, and not applies to any subtrees.

// The left-most node is defined as a leaf node you could reach when you always firstly travel to the 
// left subtree if exists. If not, travel to the right subtree. Repeat until you reach a leaf node.

// The right-most node is also defined by the same way with left and right exchanged.

// Example 1
// Input:
//   1
//    \
//     2
//    / \
//   3   4

// Ouput:
// [1, 3, 4, 2]

// Explanation:
// The root doesn't have left subtree, so the root itself is left boundary.
// The leaves are node 3 and 4.
// The right boundary are node 1,2,4. Note the anti-clockwise direction means you should output reversed right boundary.
// So order them in anti-clockwise without duplicates and we have [1,3,4,2].

// Example 2
// Input:
//     ____1_____
//    /          \
//   2            3
//  / \          / 
// 4   5        6   
//    / \      / \
//   7   8    9  10  
       
// Ouput:
// [1,2,4,7,8,9,10,6,3]

// Explanation:
// The left boundary are node 1,2,4. (4 is the left-most node according to definition)
// The leaves are node 4,7,8,9,10.
// The right boundary are node 1,3,6,10. (10 is the right-most node).
// So order them in anti-clockwise without duplicate nodes we have [1,2,4,7,8,9,10,6,3].

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// Time Complexity: O(n) 
var boundaryOfBinaryTree = function(root) {
  if (!root) return [];
  let left = [], bottom = [], right = [];

  if (root) {
    left.push(root.val);
  }

  // Find all the nodes on the left
  const traverseLeft = (root) => {
    if (!root) return;
    left.push(root.val);
    traverseLeft(root.left);
    if (!root.left) traverseLeft(root.right);
  }
  if (root.left) traverseLeft(root.left);
  
  // Find all the nodes at the bottom
  const traverseBottom = (root) => {
    if (!root) return;
    if (!root.left && !root.right) {
      bottom.push(root.val); 
    }  
    traverseBottom(root.left);
    traverseBottom(root.right);
  }
  traverseBottom(root);

  // Find all the nodes on the right
  const traverseRight = (root) => {
    if (!root) return;
    right.push(root.val);
    traverseRight(root.right);
    if (!root.right) traverseRight(root.left);
  }
  traverseRight(root.right);

  // Check lower left corner and remove duplicates
  let leftCorner = [...left].pop();
  let bottomLeft = [...bottom].shift();
  if (leftCorner === bottomLeft) bottom.shift();

  // Check lower right corner and remove duplicates
  let rightCorner = [...right].pop();
  let bottomRight = [...bottom].pop();
  if (rightCorner === bottomRight) right.pop();

  return [...left, ...bottom, ...right.reverse()]; // Reverse the right array to create anti-clockwise order
};

// Tests
let t1 = new TreeNode(1);
t1.right = new TreeNode(2);
t1.right.left = new TreeNode(3);
t1.right.right = new TreeNode(4);

let t2 = new TreeNode(1);
t2.left = new TreeNode(2);
t2.right = new TreeNode(3);
t2.left.left = new TreeNode(4);
t2.left.right = new TreeNode(5);
t2.left.right.left = new TreeNode(7);
t2.left.right.right = new TreeNode(8);
t2.right.left = new TreeNode(6);
t2.right.left.left = new TreeNode(9);
t2.right.left.right = new TreeNode(10);

// Edge case: The input nodes contain duplicate values
// Input: 
//         37 
//      /      \
//    -34      -48
//      \        \
//     -100       48
//       \         /  
//      -100     -54  
//         \       \
//        -71      -22
//                 /
//               -8    
// Output: 
// [37,-34,-100,-100,-71,8,-22,-54,48,-48] 

let t3 = new TreeNode(37);
t3.left = new TreeNode(-34);
t3.right = new TreeNode(-48);
t3.left.right = new TreeNode(-100);
t3.left.right.right = new TreeNode(-100);
t3.left.right.right.right = new TreeNode(-71);
t3.right = new TreeNode(-48);
t3.right.right = new TreeNode(48);
t3.right.right.left = new TreeNode(-54);
t3.right.right.left.right = new TreeNode(-22);
t3.right.right.left.right.left = new TreeNode(-8);

console.log(boundaryOfBinaryTree(t1)); // [1, 3, 4, 2]
console.log(boundaryOfBinaryTree(t2)); // [1,2,4,7,8,9,10,6,3]
console.log(boundaryOfBinaryTree(t3)); // [37,-34,-100,-100,-71,8,-22,-54,48,-48] 