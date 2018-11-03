function ListNode(val) {
  this.val = val;
  this.next = null;
};

let detectCycle = function(head) {
  let slow = head;
  let fast = head;
  while (slow && fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      
      if (slow === fast) {
          while (head !== fast) {
              head = head.next;
              fast = fast.next;
          }
          return head;
      }
  }
  return null;
};

// Test case: 
// 1 -> 2 -> 3 -> 4 -> 5 -> 2                                          
var head = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2;

// Edge case: only two nodes in linked list
// 1 -> 2 
var head2 = new ListNode(1);
head2.next = new ListNode(2);

console.log(detectCycle(head)); // return 2
/// console.log(detectCycle(head2)); // return null