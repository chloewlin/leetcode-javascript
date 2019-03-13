// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

// Solution 1:
// const longestCommonPrefix = (strs) => {
//   if (strs.length < 1) return "";
//   let sortedArr = strs.sort();
//   let first = sortedArr[0];
//   let last = sortedArr[sortedArr.length - 1];
//   let i = 0;
//   while (i < first.length && first.charAt(i) === last.charAt(i)) {
//     i++;
//   } 
//   return first.substring(0, i) || "";
// };

// Solution 2: compare every items in the array against the first word
// Time Complexity: O(n * m), worst O(n2)
  // n is the length of the strs array
  // m is the length of the longest common prefix
const longestCommonPrefix = (strs) => {
  if (!strs) return '';
  if (strs.length === 1) return strs[0];

  // loop over first word
  for (let i = 0; i < strs[0].length; i++) {
    // loop over every word in the array 
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) { 
        return strs[0].slice(0, i);
      }
    }
  }
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
// edge cases
console.log(longestCommonPrefix([""])); // "", not undefined
console.log(longestCommonPrefix(["a"])); // "a", not undefined
console.log(longestCommonPrefix(["c", "c"])); // "c"
