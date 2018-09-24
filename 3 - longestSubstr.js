// Given a string, find the length of the longest substring without repeating characters.
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
    // return false; // wrong place to have false
  }
  return false;
} 

const lengthOfLongestSubstring = function(str) {
  let combo = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j <= str.length; j++) {
      let substring = str.substring(i, j);
      if (!hasRepeat(substring)) {
        combo.push(substring.length);
      }
    }
  };

  // console.log(combo);
  return Math.max(...combo);
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3 "abc"
console.log(lengthOfLongestSubstring('bbbbb')); // 1 "b"
console.log(lengthOfLongestSubstring('pwwkew')); // 3 "wke"