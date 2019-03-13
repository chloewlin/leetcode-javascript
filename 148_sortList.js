// Sort a linked list in O(n log n) time using constant space complexity.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// sort list in-place in O(n log n) time
// merge sort or quick sort
var sortList1 = function(head) {
  let slow = head;
  let fast = head;

  // find midpoint of list
  while (fast) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Create left list - assuming every node has a unique value in the list
  let p = head;
  while (p) {
    if (p.next.val === slow.val) {
      p.next = null;
    }
    p = p.next;
  }

  let leftList = head;
  let rightList = slow;

};

var merge = function(node1, node2) {
  // TODO
}     

let list = new ListNode(4);
list.next = new ListNode(3);
list.next.next = new ListNode(2);
list.next.next.next = new ListNode(1);

let list1 = new ListNode(6);
list1.next = new ListNode(5);
list1.next.next = new ListNode(4);
list1.next.next.next = new ListNode(3);
list1.next.next.next.next = new ListNode(2);
list1.next.next.next.next.next = new ListNode(1);

console.log(sortList(list)); // 1 -> 2 -> 3 -> 4
console.log(sortList(list1)); // 1 -> 2 -> 3 -> 4 -> 5 -> 6
