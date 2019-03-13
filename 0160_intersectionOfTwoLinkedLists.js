// Write a program to find the node at which the intersection of two singly linked lists begins.

// For example, the following two linked lists:

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8
// Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the 
// two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, 
// it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 
// 3 nodes before the intersected node in B.

// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: null
// Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as 
// [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB 
// can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.

// Notes:

// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let pA = headA, pB = headB, res = null;

  while (pA !== null && pB !== null) {
    console.log('pA', pA.val);
    console.log('pB....', pB.val);
    if (pA.val === pB.val) {
      res = pA.val;
    } else {
      pA = pA.next;
      pB = pB.next;
    }
  }

  console.log(res); 
  // TODO
};

// Tests
function Node(val) {
  this.val = val;
  this.next = null;
};

const listA = new Node(4);
listA.next = new Node(1);
listA.next.next = new Node(8);
listA.next.next.next = new Node(4);
listA.next.next.next.next = new Node(5);

const listB = new Node(5);
listB.next = new Node(0);
listB.next.next = new Node(1);
listB.next.next.next = new Node(8);
listB.next.next.next.next = new Node(4);
listB.next.next.next.next.next = new Node(5);

console.log(getIntersectionNode(listA, listB));
