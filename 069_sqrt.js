// Divide-and-conquer approach
// Time Complexity: O(logN)
var mySqrt = function(x) {
  var left = 1; 
  var right = Math.ceil(x/2);
  var mid;

  while (left <= right) {
    mid = Math.ceil((left + right) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};

console.log(mySqrt(4)); // 2
console.log(mySqrt(25)); // 5
console.log(mySqrt(8)); // 2