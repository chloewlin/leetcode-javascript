// Do not return anything, modify nums1 in-place instead.
var nums1 = [1,2,3,0,0,0];
var nums2 = [2,5,6];

var merge = function(nums1, m, nums2, n) {
  var length = m + n - 1; 
  while (length) {
    if (n === 0) break;
    if (nums1[m-1] > nums2[n-1]) {
      nums1[length] = nums1[m-1];
      m--;
    } else {
      nums1[length] = nums2[n-1];
      n--;
    }
    length--;
  }
  console.log(nums1);
};
console.log(merge(nums1, 3, nums2, 3)); //[1,2,2,3,5,6]
console.log(merge([0], 0, [1], 1));