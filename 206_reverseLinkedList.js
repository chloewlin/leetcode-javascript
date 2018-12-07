// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

function ListNode(val) {
  this.val = val;
  this.next = null;
};

// Solution 1: iterative
// Time Complexity: O(n)
// Space Complexity: O(1)
var reverseList = function(head) {
  var prev = null;
  var curr = head;
  
  while (curr !== null) {
    var temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
 
  return prev;
};

// Solution 2: recursive
// Time Complexity: O(n)
// Space Complexity: O(n) 
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  var newList = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newList;
};


var node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);

console.log(reverseList(node));