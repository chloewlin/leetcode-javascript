// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

var removeElements = function(head, val) {
  if (!head) return null;

  if (head.val == val) {
    return removeElements(head.next, val);
  }
  
  function recurse(link) {
    if (link == null) return;
    
    while (link.next != null && link.next.val == val) {
      link.next = link.next.next;
    }
  
    recurse(link.next);
  }
  recurse(head);

  return head;
};
