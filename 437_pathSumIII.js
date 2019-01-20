// You are given a binary tree in which each node contains an integer value.

// Find the number of paths that sum to a given value.

// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent 
// nodes to child nodes).

// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

// Example:

// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

// Return 3. The paths that sum to 8 are:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3.  -3 -> 11

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};


const pathSum = (root, sum) => {
  let path = 0;

  const recurse = (root, sum) => {
    if (!root) return 0;

    if (root.val === sum) {
      path++;
    }
    sum -= root.val;
    recurse(root.left, sum);
    recurse(root.right, sum);
  }
  recurse(root, sum);
  recurse(root.left, sum);
  recurse(root.right, sum);
  
  return path;
};

let t = new TreeNode(10);
t.left = new TreeNode(5);
t.right = new TreeNode(-3);
t.left.left = new TreeNode(3);
t.left.right = new TreeNode(2);
t.left.left.left = new TreeNode(3);
t.left.left.right = new TreeNode(-2);
t.left.right = new TreeNode(2);
t.left.right.right = new TreeNode(1);
t.right.right = new TreeNode(11);

console.log(pathSum(t, 8));