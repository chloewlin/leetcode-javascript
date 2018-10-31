function ListNode(val) {
  this.val = val;
  this.next = null;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
// Strategy: Hare and Tortoise

// Note: Using a variable "isCycle" will cause an infinite loop.
// Our while loop should stop ("return") immediately as soon as two pointers
// point to the same node!
var hasCycle = (head) => {
  // var isCycle = false;
  var slow = head;
  var fast = head;

  // fast is always going to reach the end of our list before slow
  // we should always check if fast.next is not null
  while (fast && fast.next) { 
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

// Solution 2
var hasCycle = (head) => {
  if (!head || !head.next) return false;
  var slow = head;
  var fast = head.next;

  // Check if we have more than two nodes
  // If we do not check fast.next and we have only two nodes 
  // Our fast.next.next will point to null, which will cause an error
  while (fast && fast.next) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
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

console.log(hasCycle(head)); // return true
console.log(hasCycle(head2)); // return false