// Find the kth largest element in an unsorted array. Note that it is the kth largest element 
// in the sorted order, not the kth distinct element.

// Example 1:
// Input: [3,2,1,5,6,4] and k = 2
// Output: 5

// Example 2:
// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ array's length.

var BinaryHeap = function() {
  this._heap = [];
  this._compare = function (i, j) { 
    if (i === undefined) return j;
    if (j === undefined) return i;
    return i < j;
  };
}

BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}

BinaryHeap.prototype.swapNodesAt = function(index, parentIndex) {
  var temp = this._heap[index];
  this._heap[index] = this._heap[parentIndex]; 
  this._heap[parentIndex] = temp;
};

BinaryHeap.prototype.insert = function (value) {
  this._heap.push(value);
  var index = this._heap.length - 1;
  var parentIndex = Math.floor((index - 1) / 2);

  while (index > 0) {
    if (this._compare(this._heap[index], this._heap[parentIndex])) {
      this.swapNodesAt(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    } else {
      break;
    }
  }
}

BinaryHeap.prototype.getLesserChildIndex = function(parentIndex) {
  var childIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2].filter((index) => index < this._heap.length);
  
  // console.log('childIndices', childIndices);
  return this._compare(this._heap[childIndices[0]], this._heap[childIndices[1]]) ? childIndices[0] : childIndices[1];
}

BinaryHeap.prototype.removeRoot = function () {
  // swap root with the last node
  this.swapNodesAt(this._heap.length - 1, 0);
  var originalRoot = this._heap.pop();
  var temporaryRootIndex = 0;
  var lesserChildIndex = this.getLesserChildIndex(temporaryRootIndex);
  // console.log('lesserChild', lesserChildIndex);
  
  while (lesserChildIndex && this._compare(this._heap[lesserChildIndex], this._heap[temporaryRootIndex])) {
    // console.log(this._heap);
    this.swapNodesAt(lesserChildIndex, temporaryRootIndex);
    temporaryRootIndex = lesserChildIndex;
    lesserChildIndex = this.getLesserChildIndex(temporaryRootIndex);
  }
  return originalRoot;
}

var findKthLargest = function(nums, k) {
  var minHeap = new BinaryHeap();
  nums.forEach((num) => minHeap.insert(num));
  // console.log(minHeap._heap);  

  var kthLargestPos = minHeap._heap.length - k;

  for (var i = 0; i < kthLargestPos; i++) {
    minHeap.removeRoot()
    // console.log('->', minHeap.removeRoot());
  }
  // return minHeap._heap;
  return minHeap.removeRoot();
};

// console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 9)) // 1
// console.log(findKthLargest([3,2,1,4], 2)) // 3
// console.log(findKthLargest([-1,2,0], 2)) // 0