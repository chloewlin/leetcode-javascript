// Given a string S and a string T, find the minimum window in S which will contain all the characters in 
// T in complexity O(n).

// Example:
// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"

// Note:
// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window 
// in S.

// Strategy: Sliding Window
var minWindow = function(s, t) {
  let answer = "";
  let hash = {};

  // Set up a hashmap to keep track of chars in t
  for (let char in t) {
    hash[t[char]] = hash[t[char]] + 1 || 1;
  }

  // Iterate over s to find the shortest substring containing chars in t 
  let count = Object.keys(hash).length;
  let left = 0;
  let right = -1;

  while (right < s.length + 1) {
    if (count > 0) {
      if (hash[s[right]] !== undefined) hash[s[right]]--; 
      if (hash[s[right]] === 0) count--;
      right++;
      console.log('-->', hash[s[right]])
      console.log('right:', hash, s[right], count, s.substr(left, right + 1));
    } 

    // When count === 0, we've found a valid string
    if (count === 0) { 
      // Record the current minimal window
      if (!answer || right - left < answer.length) {
        answer = s.slice(left, right + 1);
        console.log(answer);
      }

      if (hash[s[left]] !== undefined) hash[s[left]]++;
      if (hash[s[[left]]] > 0) count++;
    
      console.log('left:', hash, s[left], count, s.substr(left, right + 1));
      left++;
    }
  }
 
  return answer;
};

// console.log(minWindow("ADBANC", "ABC")); // "BANC"
// console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"