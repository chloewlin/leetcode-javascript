// Given a string, find the length of the longest substring without repeating characters.
var lengthOfLongestSubstring = function(str) {
  var combo = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j < str.length; j++) {
      console.log(str.substring(i, j));
    }
  }
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3 "abc"
// console.log(lengthOfLongestSubstring('bbbbb')); // 1 "b"
// console.log(lengthOfLongestSubstring('pwwkew')); // 3 "wke"