// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example:
// Given 1->2->3->4, you should return the list as 2->1->4->3.

function ListNode(val) {
  this.val = val;
  this.next = null;
};

// If the input is an array and you can change the values at each index: 
var swapPairsInArray = function(head) {
  for (let i = 0; i < head.length; i++) {
    if (i % 2 === 0 && head[i + 1] !== undefined) {
      let prev = head[i];
      head[i] = head[i+1];
      head[i+1] = prev;
    } 
  }
 
  return head; 
};

// Note: you cannot change the values of the nodes! So the logic above doesn't work.
// Solution: 3 pointers + recursion
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  let v1 = head;
  let v2 = head.next;
  let v3 = head.next.next;

  v2.next = v1; // swap values of v1 and v2
  v1.next = swapPairs(v3); // recursively swap values starting from v3

  return v2;
};
// 1  -> 2 -> 3 -> 4  ||  2 -> 1  ||  2 -> 1 -> 4 -> 3
// ^1   ^2    ^3

// Tests
let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);

// console.log(list);
// console.log(swapPairsInArray([1,2,3])); // [2, 1, 3]
// console.log(swapPairsInArray([1,2,3,4])); // [ 2, 1, 4, 3 ]
// console.log(swapPairsInArray([1,2,3,4, 5])); // [ 2, 1, 4, 3, 5]
// console.log(swapPairs(list));
// console.log(swapPairs(list1));
