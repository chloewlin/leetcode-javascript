// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True

// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

// Brute Force 
var validPalindrome = function(s) {
  // TODO: add solution
};

var splitInHalf = (s, i) => s.substr(0, i) + s.substr(i + 1);

var isPalindrome = (s) => s === [...s].reverse().join('');

// console.log(validPalindrome("aba")); // true
// console.log(validPalindrome("abca")); // true
// console.log(validPalindrome("handnah")); // true
// console.log(validPalindrome("abcd")); // false
// console.log(validPalindrome("aabbccdd")); // false
console.log(validPalindrome("deeee")); // false

