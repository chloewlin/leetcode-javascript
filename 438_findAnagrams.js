// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
// The order of output does not matter.

// Example 1:
// Input: s: "cbaebabacd" p: "abc"
// Output: [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Example 2:
// Input: s: "abab" p: "ab"
// Output: // [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Strategy: Sliding Window
// Reference: Leetcode #76 minWindow
var findAnagrams = function(s, p) {
  let ans = [];
  let hash = {};

  // Set up a hash table
  for (let i = 0; i < p.length; i++) {
    hash[p[i]] = hash[p[i]] + 1 || 1;
  }

  let counter = Object.keys(hash).length;
  let left = 0;
  let right = 0;

  // Expand window on the right
  while (right < s.length) {
    if (hash[s[right]] !== undefined) hash[s[right]]--;
    if (hash[s[right]] === 0) counter--;
    right++; 

    while (counter === 0) {
      if (right - left === p.length) {
        ans.push(left);
        // uncomment this to see the anagrams:
        // console.log(s.slice(left, right)); 
      }

      // Contract window from the left
      if (hash[s[left]] !== undefined) hash[s[left]]++;
      if (hash[s[left]] > 0) counter++;
      left++;
    }
  }

  return ans;
};

console.log(findAnagrams("cbaebabacd", "abc")); // [0,6]
console.log(findAnagrams("abab", "ab")); // [0,1,2]