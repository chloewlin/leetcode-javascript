// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. 
// No two characters may map to the same character but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// Note:
// You may assume both s and t have the same length.

// Solution: hashmap
// Time Complexity: O(n)
// Space Complexity: O(n)
var isIsomorphic = function(s, t) {
  if (!s || !t) return true;
  let count = {};

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === undefined) {
      for (key in count) {
        if (count[key] === t[i]) {
          return false;
        }
      }
      count[s[i]] = t[i];
    } else {
      if (count[s[i]] !== t[i]) {
        return false;
      }
    }
  }

  return true;
};

// Tests
// console.log(isIsomorphic("egg", "add")); // true
// console.log(isIsomorphic("foo", "bar")); // false
// console.log(isIsomorphic("paper", "title")); // true
// console.log(isIsomorphic("ab", "aa")); // false