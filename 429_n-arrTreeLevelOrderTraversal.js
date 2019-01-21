// Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example, given a 3-ary tree:

// 
//         1
//      /  |  \
//     3   2   4
//    / \
//   5   6


// We should return its level order traversal:

// [
//      [1],
//      [3,2,4],
//      [5,6]
// ]
 
// Note:
// The depth of the tree is at most 1000.
// The total number of nodes is at most 5000.

// Definition for a tree Node.
function Node(val,children) {
  this.val = val;
  this.children = children;
};

// Recursive Solution
// Time Complexity: O(n)
const levelOrder = (root) => {
  let res = [];

  const traverse = (root, level = 0) => {
    if (!root) return;
    if (!res[level]) res[level] = [];
    res[level].push(root.val);
    root.children.forEach((child) => traverse(child, level + 1))
  }
  traverse(root, 0);

  return res;
};

// Test
let t = new Node(1, []);
t.children.push(new Node(3, []));
t.children.push(new Node(2, []));
t.children.push(new Node(4, []));
t.children[0].children.push(new Node(5, []));
t.children[0].children.push(new Node(6, []));
// console.log(t);

console.log(levelOrder()); // []
console.log(levelOrder(t)); // [[1],[3,2,4],[5,6]]