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

  while (right < s.length) {
    if (count > 0) {
      // Slide the window to the right
      // When we add one char we've seen in hash to our string, decrement it in hash by 1
      // When a char's value is 0 in hash, it means we don't need to look for it in S anymore
      // console.log(s[right]);
      right++;
      if (hash[s[right]] !== undefined) hash[s[right]]--; 
      if (hash[s[right]] === 0) count--;
      // console.log('right:', hash);
    } 

    // When count === 0, we've found a valid string
    if (count === 0) { 
      // Update the current minimal window
      if (!answer || right - left < answer.length) {
        answer = s.slice(left, right + 1);
        // console.log(answer);
      }

      // Slide the window from the left
      // When we remove one char we've seen in hash, increment it in hash by 1
      // When a char's value is more than 0 in hash, it means we still need it in S
      if (hash[s[left]] !== undefined) hash[s[left]]++;
      if (hash[s[[left]]] > 0) count++;
      left++;
    }
  }
 
  return answer;
};

console.log(minWindow("ADBANC", "ABC")); // "BANC"
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"

// Also reference: 
// #242 isAnagram (easy)
// #438 find all anagrams in a string (medium)
// #567 checkPermutation (medium)
