function Node(val) {
  this.val = val;
  this.left = this.right = null;
};

var isSameTree = function(p, q) {
  if (p === null) return q === null;
  if (q === null) return p === null;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var t1 = new Node(1);
t1.left = new Node(2);
t1.right = new Node(3);

var t2 = new Node(1);
t2.left = new Node(2);
t2.right = new Node(3);

console.log(isSame(t1, t2));
