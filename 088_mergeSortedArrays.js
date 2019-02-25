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
const merge = (nums1, m, nums2, n) => {
  let arr = [...nums1.slice(0, m), ...nums2.slice(0, n)];
  arr.sort((a, b) => a - b);
  arr.forEach((n, i) => nums1[i] = n);
};

// Solution 2
// var merge = function(nums1, m, nums2, n) {
//   var length = m + n - 1; 
//   while (length) {
//     if (n === 0) break;
//     if (nums1[m-1] > nums2[n-1]) {
//       nums1[length] = nums1[m-1];
//       m--;
//     } else {
//       nums1[length] = nums2[n-1];
//       n--;
//     }
//     length--;
//   }
//   console.log(nums1);
// };

// Tests
var nums1 = [1,2,3,0,0,0];
var nums2 = [2,5,6];

console.log(merge(nums1, 3, nums2, 3)); //[1,2,2,3,5,6]
console.log(merge([0], 0, [1], 1));
