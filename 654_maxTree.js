// Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

// The root is the maximum number in the array.
// The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
// The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
// Construct the maximum tree by the given array and output the root node of this tree.

// Example 1:
// Input: [3,2,1,6,0,5]
// Output: return the tree root node representing the following tree:

//       6
//     /   \
//    3     5
//     \    / 
//      2  0   
//        \
//         1
// Note:
// The size of the given array will be in the range [1,1000].

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// TODO: complete the func, clean up code
var constructMaximumBinaryTree = function(nums) {
  let root = Math.max(...nums);
  let index = nums.indexOf(root);
  console.log(root);
  console.log(index);

  let right = nums.slice(index + 1);
  let left = nums.slice(0, index);
  console.log(left, right);

  while (left.length) {
    let mid = Math.floor(left.length / 2);
    root.left = new TreeNode(left[mid]);
  }

};

console.log(constructMaximumBinaryTree([3,2,1,6,0,5])); 
