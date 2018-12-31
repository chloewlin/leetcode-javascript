// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

// Given linked list -- head = [4,5,1,9], which looks like following:

// 4 -> 5 -> 1 -> 9

// Example 1:
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling 
// your function.

// Example 2:
// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling y
// our function.

// Note:
// The linked list will have at least two elements.
// All of the nodes' values will be unique.
// The given node will not be the tail and it will always be a valid node of the linked list.
// Do not return anything from your function.

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
};

// Strategy: We're overwriting the current node with the next node.
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

// Test case: 
// 4 -> 5 -> 1 -> 9 
var node = new ListNode(4);
var node2 = new ListNode(5);
node.next = node2;
node2.next = new ListNode(1);
node2.next.next = new ListNode(9);

// Our function will overwrite node 2. Our linked list now looks like this: 
// 4 -> 1   1 -> 9
//      |________|
// We now have two 1s in our list. Both nodes' next pointer points to 9.
// Our next list now includes the first 1 and skip the second 1.
deleteNode(node2); 
console.log(node); // 4 -> 1 -> 9