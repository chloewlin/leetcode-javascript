// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

// Calling next() will return the next smallest number in the BST.

// Example:
// BSTIterator iterator = new BSTIterator(root);
// iterator.next();    // return 3
// iterator.next();    // return 7
// iterator.hasNext(); // return true
// iterator.next();    // return 9
// iterator.hasNext(); // return true
// iterator.next();    // return 15
// iterator.hasNext(); // return true
// iterator.next();    // return 20
// iterator.hasNext(); // return false
 
// Note:
// next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
// You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST 
// when next() is called.

const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

// Naive solution: 
// Do in-order traversal of the tree and save the result in a queue.
// This is easy to understand, but does not meet the constraint of O(h) space.
var BSTIterator = function(root) {
  this.queue = [];
  
  const traverse = (root) => {
    if (!root) return;
    if (root.left) traverse(root.left);
    this.queue.push(root.val);
    if (root.right) traverse(root.right);
  }
  traverse(root);
};

BSTIterator.prototype.next = function() {
  if (this.queue.length > 0) {
    return this.queue.shift();
  }
};

BSTIterator.prototype.hasNext = function() {
  return this.queue.length !== 0;   
};

let t = new TreeNode(1);
t.left = new TreeNode(2);
t.right = new TreeNode(3);
t.right.left = new TreeNode(4);
t.right.right = new TreeNode(5);

// [2, 1, 4, 3, 5 ]
let i = new BSTIterator(t);
console.log(i.next()); // 2
console.log(i.next()); // 1
console.log(i.hasNext()); // true
console.log(i.next()); // 4