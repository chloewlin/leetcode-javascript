// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// For example, given a 3-ary tree:

//           1
//        /  |  \
//       3   2  4
//      / \
//     5  6


// We should return its max depth, which is 3.

// Note:

// The depth of the tree is at most 1000.
// The total number of nodes is at most 5000.

function TreeNode(val, children) {
  this.val = val;
  this.children = children;
};

var maxDepth = function(root) {
  if (!root) return 0;
  let depth = 0;

  root.children.forEach((child) => {
    depth = Math.max(depth, maxDepth(child));
  });

  return depth + 1;
};

// Tests
//
//           1
//        /  |  \
//       3   2  4
//      / \
//     5  6

let t = new TreeNode(1, []);
let t1 = new TreeNode(3, []);
t1.children.push(new TreeNode(5, []));
t1.children.push(new TreeNode(6, []));
let t2 = new TreeNode(2, []);
let t3 = new TreeNode(4, []);
t.children.push(t1);
t.children.push(t2);
t.children.push(t3);

console.log(t);
console.log(maxDepth()); // 0
console.log(maxDepth(t)); // 3