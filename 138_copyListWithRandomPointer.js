// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

function RandomListNode(label) {
  this.label = label;
  this.next = null;
  this.random = null;
};

function Node(val) {
  this.val = val;
  this.next = null;
};

// Question 1: make a deep copy of a linkedList
var copyList = function(head) {
  if (!head) return null;
  let copy = new Node();
  let p1 = head;
  let p2 = copy;
  
  while (p1) {
    p2.next = new Node(p1.val);
    p2 = p2.next;
    p1 = p1.next;
  }

  return copy.next;
};

// Tests
// 1 -> 2 -> 3 -> 4
let linkedList = new Node(1);
linkedList.next = new Node(2);
linkedList.next.next = new Node(3);
linkedList.next.next = new Node(4);
// console.log(linkedList);
// console.log(copyList(linkedList));

// Quesiton 2: make a deep copy of a random list node
var copyRandomList = function(head) {
  if (!head) return null;
  let copy = new RandomListNode();
  let p1 = head;
  let p2 = copy;
  let hashmap = {};
  
  while (p1) {
    p2.next = new RandomListNode(p1.label);
    hashmap[p1.label] = new RandomListNode(p1.label);
    p2 = p2.next;
    p1 = p1.next;
  }

  p1 = head;
  p2 = copy.next;

  while (p1) {
    if (p1.random !== null) {
      p2.random = hashmap[p1.random.label];
    } 
    p2 = p2.next;
    p1 = p1.next;
  }

  return copy.next;
};

// Tests
// 1 -> 2 -> 3 -> 4  
let randomList = new RandomListNode(1);
randomList.next = new RandomListNode(2);
randomList.random = new RandomListNode(4);
randomList.next.next = new RandomListNode(3);
randomList.next.next.next = new RandomListNode(4);
// console.log(randomList);
// console.log(copyRandomList(randomList)); 
