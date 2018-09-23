function listNode(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

const listToNum = function(linkedList) {
  let arr = [];
  while (linkedList.head) {
    arr.push(linkedList.head.val.toString());
    linkedList.head = linkedList.head.next;
  }
  return parseInt(arr.reverse().join(''));
}

const addTwoNumbers = function(l1, l2) {
  const num1 = listToNum(l1);
  const num2 = listToNum(l2);
  const sum = num1 + num2;
  const reversedSumArr = sum.toString().split('').reverse();
  console.log(reversedSumArr);

  let newList = new LinkedList();
  let node = null; 
  
  for (let i = 1; i < reversedSumArr.length; i++) {
    if (!newList.head) {
      newList.head = new listNode(parseInt(reversedSumArr[0])); 
      newList.tail = new listNode(parseInt(reversedSumArr[0])); 
    } 
    newList.head.next = new listNode(reversedSumArr[i]);
    console.log(newList);
    // should complete function to turn an array into a new linked list
  }

}

L1 = new LinkedList();
const node1 = new listNode(2);
node1.next = new listNode(4);
node1.next.next = new listNode(3);
L1.head = node1;
L1.tail = node1.next.next;
L2 = new LinkedList();
const node2 = new listNode(5);
node2.next = new listNode(6);
node2.next.next = new listNode(4);
L2.head = node2;
L2.tail = node2.next.next;

console.log(addTwoNumbers(L1, L2));