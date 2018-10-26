// Time Complexity: O(n)
// Hint: the linked list is already sorted
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  var curr = head;

  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

// 1 -> 1 -> 1 -> 2 -> 3 -> 3
var node = new ListNode(1);
node.next = new ListNode(1);
node.next.next = new ListNode(1);
node.next.next.next = new ListNode(2);
node.next.next.next.next = new ListNode(3);
node.next.next.next.next.next = new ListNode(3);
console.log(deleteDuplicates(node)); // 1 -> 2 -> 3