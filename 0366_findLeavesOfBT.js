// Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.

// Example:

// Input: [1,2,3,4,5]
  
//           1
//          / \
//         2   3
//        / \     
//       4   5    

// Output: [[4,5,3],[2],[1]]
 

// Explanation:
// 1. Removing the leaves [4,5,3] would result in this tree:
//           1
//          / 
//         2          
 

// 2. Now removing the leaf [2] would result in this tree:
//           1          
 

// 3. Now removing the leaf [1] would result in the empty tree:
//           []         


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

// Time Complexity: O(n)
const findLeaves = (root) => {
  let res = [];

  const find = (root) => {
    if (!root) return 0;

    let left = find(root.left);
    let right = find(root.right);
    let depth = Math.max(left, right);

    res[depth] = res[depth] || [];
    res[depth].push(root.val);

    return depth + 1;
  }
  find(root);

  return res;
};

// Tests
//                     1 -----> depth = 3
//                    / \
//   depth = 2 <---- 2   3 -------> depth = 1
//                  / \     
//                 4   5 ---------> depth = 1
//                / \
//             null null -----> return 0
// 
// Traverse order: 4 -> 5 -> 2 -> 3 -> 1
let t = new TreeNode(1);
t.left = new TreeNode(2);
t.right = new TreeNode(3);
t.left.left = new TreeNode(4);
t.left.right = new TreeNode(5); 

console.log(findLeaves(t)); // [[4,5,3],[2],[1]]

//                     1 -----> depth = 3
//                    / \
//   depth = 2 <---- 2   3 -------> depth = 1
//                  /    
//                 4 ---------> depth = 1  
//                / \
//             null null -----> return 0
// 
// Traverse order: 4 -> 2 -> 3 -> 1
let t1 = new TreeNode(1);
t1.left = new TreeNode(2);
t1.right = new TreeNode(3);
t1.left.left = new TreeNode(4);

console.log(findLeaves(t1)); // [[4,3],[2],[1]]