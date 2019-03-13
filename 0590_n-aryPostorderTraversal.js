// Given an n-ary tree, return the postorder traversal of its nodes' values.

// For example, given a 3-ary tree:
// 
//         1
//      /  |  \
//     3   2   4
//    / \
//   5   6

// Return its postorder traversal as: [5,6,3,2,4,1]. 
// Note: Recursive solution is trivial, could you do it iteratively?

// Definition for a tree Node.
function Node(val,children) {
  this.val = val;
  this.children = children;
};

// Recursive solution
var postorder = function(root) {
  let values = [];

  let traverse = (root) => {
    if (!root) return;
    root.children.forEach((child) => traverse(child));
    values.push(root.val);
  }
  traverse(root);

  return values;
};

// Solution 2: Iterative 
var postorderIterative = (root) => {
  if (!root) return [];
  let stack = [];
  let queue = [root];

  while (queue.length) {
    let current = queue.shift();
    
    stack.unshift(current.val);

    for (let i = 0; i < current.children.length; i++) {
      queue.unshift(current.children[i]);
    }
  }

  return stack;
};

// Test
let t = new Node(1, []);
t.children.push(new Node(3, []));
t.children.push(new Node(2, []));
t.children.push(new Node(4, []));
t.children[0].children.push(new Node(5, []));
t.children[0].children.push(new Node(6, []));
// console.log(t);

console.log(postorder()); // []
console.log(postorder(t)); // [5,6,3,2,4,1]
console.log(postorderIterative()); // []
console.log(postorderIterative(t)); // [5,6,3,2,4,1]