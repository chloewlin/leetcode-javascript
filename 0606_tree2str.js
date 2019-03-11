// You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

// The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs 
// that don't affect the one-to-one mapping relationship between the string and the original binary tree.

// Example 1:

// Input: Binary tree: [1,2,3,4]
//        1
//      /   \
//     2     3
//    /    
//   4     
// Output: "1(2(4))(3)"
// Explanation: Originallay it needs to be "1(2(4)())(3()())", 
// but you need to omit all the unnecessary empty parenthesis pairs. 
// And it will be "1(2(4))(3)".

// Example 2:

// Input: Binary tree: [1,2,3,null,4]
//        1
//      /   \
//     2     3
//      \  
//       4 
// Output: "1(2()(4))(3)"
// Explanation: Almost the same as the first example, 
// except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

const tree2str = (t) => {
  let str = "";

  const preorder = (node) => {
    if (!node) return;
    str += node.val;
    if (!node.left && node.right) str += "()"; 
    if (node.left) {
      str += "(";
      preorder(node.left); 
      str += ")";
    }
    if (node.right) {
      str += "(";
      preorder(node.right);
      str += ")";
    }
  }
  preorder(t);

  return str;
};

// Tests

let t1 = new TreeNode(1);
t1.left = new TreeNode(2);
t1.right = new TreeNode(3);
t1.left.left = new TreeNode(4);

console.log(tree2str(t1));

let t2 = new TreeNode(1);
t2.left = new TreeNode(2);
t2.right = new TreeNode(3);
t2.left.right = new TreeNode(4);

console.log(tree2str(t2));

console.log(tree2str());