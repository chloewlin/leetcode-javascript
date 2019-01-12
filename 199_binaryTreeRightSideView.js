// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered 
// from top to bottom.

// Example:
// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// Solution 1: 
// Time Complexity: O(n)
// Space Complexity: O(n)
const rightSideView = function(root) {
  let nodes = [];
  let res = [];
  
  // Traverse the tree by level
  const traverseByLevel = (node, level = 0) => {
    if (!node) return;
    if (!nodes[level]) nodes[level] = [];
    nodes[level].push(node.val);
    if (node.left) traverseByLevel(node.left, level + 1);
    if (node.right) traverseByLevel(node.right, level + 1);
  }
  traverseByLevel(root, 0);
  
  // Get the last element of each level
  nodes.forEach((row, i) => {
    i = row.length - 1;
    res.push(row[i]);
  });

  return res;
};

// Solution 2: 
// Time Complexity: O(n)
// Space Complexity: O(h) at best, h is the height of the tree
const rightSideView2 = function(root) {
  let nodes = [];
  
  // Traverse the tree by level
  const traverseByLevel = (node, level = 0) => {
    if (!node) return;
    // Store only one node per level
    if (!nodes[level]) nodes[level] = node.val;
    traverseByLevel(node.right, level + 1);
    traverseByLevel(node.left, level + 1);
  }
  traverseByLevel(root, 0);
  
  return nodes;
};

// Tests
let t = new TreeNode(1);
t.left = new TreeNode(2);
t.right = new TreeNode(3);
t.left.right = new TreeNode(5);
t.right.right = new TreeNode(4);

console.log(rightSideView2(t)); // [1,3,4]
console.log(rightSideView2()); // []