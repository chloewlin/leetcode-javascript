// Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  
// The guards have gone and will come back in H hours.

// Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, 
// and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, 
// and won't eat any more bananas during this hour.

// Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.
// Return the minimum integer K such that she can eat all the bananas within H hours.


// Example 1:
// Input: piles = [3,6,7,11], H = 8
// Output: 4

// Example 2:
// Input: piles = [30,11,23,4,20], H = 5
// Output: 30

// Example 3:
// Input: piles = [30,11,23,4,20], H = 6
// Output: 23
 
// Note:
// 1 <= piles.length <= 10^4
// piles.length <= H <= 10^9
// 1 <= piles[i] <= 10^9

// **************************************************************************************************// 

// Solution 1: Brute force
// let minEatingSpeed = function(piles, H) {
//   for (let k = Math.min(...piles); k <= Math.max(...piles); k++) {
//     let hoursLeft = H;

//     for (let currPile = 0; currPile < piles.length; currPile++) {
//       let hoursPerPile = Math.ceil(piles[currPile] /k);
//       hoursLeft -= hoursPerPile; 

//       if (hoursLeft < 0) {
//         continue;
//       }
  
//       if (currPile === piles.length - 1 && hoursLeft === 0) {
//         return k;
//       }
//     }
//   }
// };

// Solution 2: Binary Search
// Time Complexity: O(n log w) - n = number of piles; w = max size of a pile
let minEatingSpeed = function(piles, H) {
  const max = Math.max(...piles);
  let start = 0, end = max, res = max;

  while (start <= end) {
      var mid = Math.floor((end - start) / 2) + start;
      
      for (var i = 0, hours = 0; i < piles.length; i++) hours += Math.ceil(piles[i] / mid);
      if (hours > H) start = mid + 1;
      else {
        if (mid < res) res = mid;
        end = mid - 1;
      }
  }
  return res;
};

// console.log(minEatingSpeed([3,6,7,11], 8)); // k = 4
// console.log(minEatingSpeed([30,11,23,4,20], 5)); // k = 30
// console.log(minEatingSpeed([30,11,23,4,20], 6)); // k = 23