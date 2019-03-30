// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

// O(n) time
// let isPalindrome = function(str) {
//   const originalStr = str.toLowerCase();
//   const reversedStr = str.toLowerCase().split('').reverse().join('');
//   return originalStr === reversedStr ? true : false;
// }

// Solution 1: O(n3) time
// let longestPalindrome = function(str) {
//   let palindromes = [];

//   if (str.length < 1) return "";

//   for (let i = 0; i < str.length; i++) {
//     for (let j = 1; j <= str.length; j++) {
//       let substr = str.substr(i, j);
//       let length = str.substr(i, j).length;
//       if (isPalindrome(substr)) {
//         palindromes.push({substr, length});
//       }
//     }
//   }

//   let maxLength = 0;
//   let max = null;
//   for (let i = 0; i < palindromes.length; i++) {
//     if (palindromes[i].length > maxLength) {
//       maxLength = palindromes[i].length;
//       max = palindromes[i].substr;
//     }
//   }
  
//   return max;
// };

// Solution 2: O(n2) time
const longestPalindrome = function(s) {
  let res = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;

      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }

      if ((right - left - 1) > res.length) {
        res = s.substring(left + 1, right);
      }
    }
  }

  return res;
};

// Tests
console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("")); // ""
