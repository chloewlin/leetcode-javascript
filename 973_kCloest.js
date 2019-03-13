// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

// (Here, the distance between two points on a plane is the Euclidean distance.)

// You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

// Example 1:

// Input: points = [[1,3],[-2,2]], K = 1
// Output: [[-2,2]]
// Explanation: 
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].

// Example 2:
// Input: points = [[3,3],[5,-1],[-2,4]], K = 2
// Output: [[3,3],[-2,4]]
// (The answer [[-2,4],[3,3]] would also be accepted.)
 

// Note:
// 1 <= K <= points.length <= 10000
// -10000 < points[i][0] < 10000
// -10000 < points[i][1] < 10000

// Solution 1: sort
// O(nlogn) time, O(n) space
const kClosest = (points, K) => {
  let distances = [];
  for (let i = 0; i < points.length; i++) {
    let point = points[i];
    let distanceSqrt = Math.pow(point[0], 2) + Math.pow(point[1], 2);
    distances.push([point, Math.sqrt(distanceSqrt)]);
  }
  
  distances.sort((a, b) => a[1] - b[1]);

  let res = [];

  while (K > 0) {
    res.push(distances.shift()[0]);
    K--;
  }

  return res;
};

// Solution 2: Divide and Conquer/Quick Select
// O(n) time
const kClosest2 = (points, K) => {
  quickSelect(points, K, 0, K.length - 1);
};

const quickSelect = (points, K, low, high) => {
  if (low > high) return; 

};

const divide = (points, low, high) => {

};

// Tests
console.log(kClosest([[1,3],[-2,2]], 1)); // [[-2,2]]
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2)); // [[3,3],[-2,4]]
console.log(kClosest2([[1,3],[-2,2]], 1)); // [[-2,2]]
console.log(kClosest2([[3,3],[5,-1],[-2,4]], 2)); // [[3,3],[-2,4]]
