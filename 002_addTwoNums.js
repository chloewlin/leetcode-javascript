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
  let currNode = linkedList;
  while (currNode) {
    arr.push(currNode.val);
    currNode = currNode.next
  }
  return parseInt(arr.reverse().join(''));
}

const addTwoNumbers = function(l1, l2) {
  const num1 = listToNum(l1); // 342 
  const num2 = listToNum(l2); // 465 
  const sum = num1 + num2;
  const reversedSumArr = sum.toString().split('').reverse();
  console.log(reversedSumArr);

  let start = null;
  let prev = null;
  for (let i = 0; i < reversedSumArr.length; i++) {
    let curr = new listNode(+reversedSumArr[i]);
    if (!start) {
      start = curr;
    }
    if (prev) {
      prev.next = curr;
    }
    prev = curr;
  }
  return start;
}

const node1 = new listNode(2);
node1.next = new listNode(4);
node1.next.next = new listNode(3);
const node2 = new listNode(5);
node2.next = new listNode(6);
node2.next.next = new listNode(4);

addTwoNumbers(node1, node2);