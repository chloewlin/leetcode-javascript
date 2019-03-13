// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left 
// has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a 
// preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

// Example 1:
// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

// Note: 
// 1 <= preorder.length <= 100
// The values of preorder are distinct.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// Input: array
// Output: bst
const bstFromPreorder = (arr, start = 0, end = arr.length - 1) => {
  // base case
  if (!arr || end < start) return;
  const val = arr[start];
  const node = new TreeNode(val);
  if (end - start === 0) return node;
  
  // find the midpoint of the array
  let mid = start + 1;
  while (mid <= end) {
    if (arr[mid] > val) {
      break;
    }
    mid++;
  }

  // recursively build tree
  node.left = bstFromPreorder(arr, start + 1, mid - 1);
  node.right = bstFromPreorder(arr, mid, end);

  return node;
};

// Tests
console.log(bstFromPreorder([8,5,1,7,10,12]));
console.log(bstFromPreorder([1]));
console.log(bstFromPreorder([1,2,3]));
