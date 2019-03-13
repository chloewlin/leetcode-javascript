// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true

// Follow up:
// Could you do it in O(n) time and O(1) space?

function ListNode(val) {
  this.val = val;
  this.next = null;
};

// Brute Force: 
// Time Complexity: O(n)
// Space Complexity: O(n)
var isPalindrome = function(head) {
  let values = [];
  let p = head;

  while (p) {
    values.push(p.val);
    p = p.next;
  }

  let original = values.join('');
  let reversed = values.reverse().join('');

  return original === reversed;
};

// Solution 2: two pointers
// Time Complexity: O(n)
// Space Complexity: O(n)
const isPalindrome = (head) => {

};

// Tests
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // true

let head1 = new ListNode(1);
head1.next = new ListNode(2);

console.log(isPalindrome(head1)); // false
