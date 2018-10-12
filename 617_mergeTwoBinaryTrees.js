// Time Complexity: O(n)
var mergeTrees = function(t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;
  t1.val = t1.val + t2.val;
  t1.right = mergeTrees(t1.right, t2.right);
  t1.left = mergeTrees(t1.left, t2.left);
  return t1;
};