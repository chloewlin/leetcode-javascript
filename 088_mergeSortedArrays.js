// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold 
// additional elements from nums2.

// Example:
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// Output: [1,2,2,3,5,6]

// Do not return anything, modify nums1 in-place instead.

// Solution 1
// O((n + m) log (n + m)) time
// Make a copy of both arrays, sort them, overwrite first array
const merge = (nums1, m, nums2, n) => {
  let arr = [...nums1.slice(0, m), ...nums2.slice(0, n)];
  arr.sort((a, b) => a - b);
  arr.forEach((n, i) => nums1[i] = n);
  // uncomment below to see the first array after merging
  // console.log(nums1); 
};

// Solution 2
// Copy the second array in the empty half of the first array, then sort
const merge2 = (nums1, m, nums2, n) => {
  if (!n) return;
  for (let i = 0; i < n; i++) {
    nums1[m+i] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
  // console.log(nums1);
};

var nums1 = [1,2,3,0,0,0];
var nums2 = [2,5,6];

// Solution 3 - best run time
// O (n + m) time, O(1) space
// Fill in the first array starting from the end
var merge3 = function(nums1, m, nums2, n) {
  // Find the starting point of the final elements
  m--;
  n--; 
  while (m + n >= -1) {
    // If a number in the first array is bigger, or nothing is left in the second array
    // copy it over 
    if (nums1[m] > nums2[n] || n < 0) {
      nums1[m + n + 1] = nums1[m];
      m--;
    } else {
      // fill the first array from the end
      nums1[m + n + 1] = nums2[n];
      n--;
    }
  }

  // console.log(nums1);
};

// Tests
console.log(merge(nums1, 3, nums2, 3)); // [1,2,2,3,5,6]
console.log(merge([0], 0, [1], 1)); // [1]
console.log(merge2(nums1, 3, nums2, 3)); // [1,2,2,3,5,6]
console.log(merge2([0], 0, [1], 1)); // [1]
console.log(merge3(nums1, 3, nums2, 3)); // [1,2,2,3,5,6]
console.log(merge3([0], 0, [1], 1)); // [1]
