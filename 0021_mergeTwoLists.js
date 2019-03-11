function ListNode(val) {
    this.val = val;
    this.next = null;
};
// *iterative*
// Initialize a newHead 
// Initialize a curr pointer
// While l1 and l2 are not empty, compare the value of l1 and l2
  // If l1 > l2, start list with l2; else if l2 is >= l1, start list with l1
  // Move curr to next to traverse the newly merged list
// If two lists have different lengths, point curr.next to the extra nodes
// Return the newly merged list

// Time Complexity: O(1)
const mergeTwoLists = function(l1, l2) {
  let newHead = new ListNode(null);
  let curr = newHead;
  
  while(l1 && l2) {
    if (l1.val > l2.val) {
      curr.next = l2;
      l2 = l2.next;
    } else {
      curr.next = l1;
      l1 = l1.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;

  return newHead.next;
}

var L1 = new ListNode(1);
L1.next = new ListNode(2);
L1.next.next = new ListNode(4);
var L2 = new ListNode(1);
L2.next = new ListNode(3);
L2.next.next = new ListNode(4);
// console.log(L1);
// console.log(L2);
console.log(mergeTwoLists(L1, L2))