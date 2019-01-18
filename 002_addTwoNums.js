// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in 
// reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function listNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  const head = new listNode();
  for (let curr = head, carry = 0; l1 || l2 || carry; curr = curr.next) {
      let next = new listNode((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry);
      carry = next.val >= 10 ? 1 : 0;
      if (carry) next.val -= 10;
      curr.next = next;
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
  }
  return head.next;
};

// Should return 7 -> 0 -> 8
const node1 = new listNode(2);
node1.next = new listNode(4);
node1.next.next = new listNode(3);
const node2 = new listNode(5);
node2.next = new listNode(6);
node2.next.next = new listNode(4);

// Should return 1 -> 8
// const node1 = new listNode(1);
// node1.next = new listNode(8);
// const node2 = new listNode(0);

console.log(addTwoNumbers(node1, node2));