// Given a string, find the length of the longest substring without repeating characters.

// Solution 1: Brute Force
// Time Complexity: O(n3)
const hasRepeat = function(str) {
  let unique = {};

  for (let i = 0; i < str.length; i++) {
    if (!unique[str[i]]) {
      unique[str[i]] = 1;
    } else {
      unique[str[i]]++; 
    }
  }

  for (var key in unique) {
    if (unique[key] > 1) {
      return true;
    } 
  }
  return false;
} 

const lengthOfLongestSubstring = function(str) {
  let longest = 0;
  if (str.length === 0) return 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      var substring = str.slice(i, j);
      if (!hasRepeat(substring) && substring.length > longest) {
        longest = substring.length;
      }
    }
  };
  return longest;
};

// Solution 2: Sliding Window
// Time Complexity: O(2n) or O(n)
const lengthOfLongestSubstring = function(str) {
  let set = new Set();
  let longestLength = 0; i = 0; j = 0;

  while (i < str.length && j < str.length) {
    if (!set.has(str.charAt(j))) {
      set.add(str.charAt(j++));
      // console.log(set);
      longestLength = Math.max(longestLength, j - i);
    } else {
      set.delete(str.charAt(i++));
    }
  }
  // console.log(set);
  return longestLength;
};

// Solution 3: Sliding Window optimized using Map

console.log(lengthOfLongestSubstring('abcabcbb')); // 3 "abc"
console.log(lengthOfLongestSubstring('bbbbb')); // 1 "b"
console.log(lengthOfLongestSubstring('pwwkew')); // 3 "wke"
console.log(lengthOfLongestSubstring('abba')); // 2 "ab"