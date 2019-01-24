// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// Example 1:
// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true

// Example 2:
// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false

// Example 3:
// Input:     1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// Output: false

function Node(val) {
  this.val = val;
  this.left = this.right = null;
};

// Recursive Solutions
const isSameTree = function(p, q) {
  if (p === null) return q === null;
  if (q === null) return p === null;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const isSameTree2 = (p, q) => {
  if (!p && !q) return true;
  if ((!p && q) || (p && !q) || (p.val !== q.val)) return false;
  return isSameTree2(p.left, q.left) && isSameTree2(p.right, q.right);
};

const isSameTree3 = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q || (p.val !== q.val)) return false;
  return isSameTree2(p.left, q.left) && isSameTree2(p.right, q.right);
};

// Iterative Solution (array comparison)
const findAll = (root) => {
  let arr = [];

  const traverse = (root) => {
    if (!root) {
      arr.push(null);
      return;
    }
    arr.push(root.val);
    traverse(root.left); 
    traverse(root.right);
  }
  traverse(root);

  return arr;
};

const isSameTreeIterative = (p, q) => {
  let pArr = findAll(p);
  let qArr = findAll(q);

  if (pArr.length !== qArr.length) return false;

  for (let i = 0; i < pArr.length; i++) {
    if (pArr[i] !== qArr[i]) return false;
  }

  return true;
};

// Tests
let t1 = new Node(1);
t1.left = new Node(2);
t1.right = new Node(3);

let t2 = new Node(1);
t2.left = new Node(2);
t2.right = new Node(3);

let t3 = new Node(1);
t3.left = new Node(2);

let t4 = new Node(1);
t4.right = new Node(2);

console.log(isSameTree(t1, t2)); // true
console.log(isSameTree(t3, t4)); // false
console.log(isSameTree(t3, null)); // false

console.log(isSameTree2(t1, t2)); // true
console.log(isSameTree2(t3, t4)); // false
console.log(isSameTree2(null, t4)); // false

console.log(isSameTree3(t1, t2)); // true
console.log(isSameTree3(t3, t4)); // false
console.log(isSameTree3(null, t4)); // false

console.log(isSameTreeIterative(t1, t2)); // true
console.log(isSameTreeIterative(t3, t4)); // false
console.log(isSameTreeIterative(t3, null)); // false