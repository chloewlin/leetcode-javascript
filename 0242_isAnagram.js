// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// Solution 1
// Time Complexity: O(n)
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let hashmap = {};
  let result = true;

  for (let i in s) {
    hashmap[s[i]] = hashmap[s[i]] + 1 || 1;
  }

  for (let i in t) {
    hashmap[t[i]] > 0 ? hashmap[t[i]]-- : result = false;
  }

  return result;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("cat", "rat"));
console.log(isAnagram("", ""));
console.log(isAnagram("harry", "potter"));