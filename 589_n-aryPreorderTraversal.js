// Given an n-ary tree, return the preorder traversal of its nodes' values.

// For example, given a 3-ary tree:

//      1
//   /  |  \
//  3   2   4
//  / \
// 5   6

// Return its preorder traversal as: [1,3,5,6,2,4].

// Note: Recursive solution is trivial, could you do it iteratively?

// Definition for a tree Node.
function Node(val,children) {
  this.val = val;
  this.children = children;
};

// Solution 1: Recursive
var preorder = function(root) {
  let values = [];

  let traverse = (root) => {
    if (!root) return;
    values.push(root.val);
    root.children.forEach((child) => traverse(child));
  }
  traverse(root);

  return values;
};

// Solution 2: Iterative 
var preorderIterative = function(root) {
  let res = [];
  let stack = [root];

  while (stack.length) {
    let current = stack.pop();
    res.push(current.val);
    for (let i = current.children.length - 1; i >= 0; i--) {
      stack.push(current.children[i]);
    }
  }

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

// console.log(preorder(t)); // [1,3,5,6,2,4]
// console.log(preorderIterative(t)); // [1,3,5,6,2,4]