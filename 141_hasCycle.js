function ListNode(val) {
  this.val = val;
  this.next = null;
};

// Time Complexity: O(n)
// Strategy: Hare and Tortoise
// Note: Using a variable "isCycle" will cause an infinite loop.
// Our while loop should stop ("return") immediately as soon as two pointers
// point to the same node!
var hasCycle = (head) => {
  // var isCycle = false;
  var slow = head;
  var fast = head;

  while (slow && fast) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      //isCycle = true;
      return true
    }
  };

  // return isCycle 
  return false
};

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
console.log(hasCycle(head));