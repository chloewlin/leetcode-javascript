// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

var firstUniqChar = function(s) {
  var chars = {};
  for (var i = 0; i < s.length; i++) {
    if (!chars[s[i]]) {
      chars[s[i]] = [i, 1];
    } else {
      chars[s[i]][1]++;
    }
  }
  for (var char in chars) {
    if (chars[char][1] === 1) {
      return chars[char][0];
    }
  }
  return -1;
};

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2