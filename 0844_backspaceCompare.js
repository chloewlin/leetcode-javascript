// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".

// Example 2:
// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".

// Example 3:
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".

// Example 4:
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

// Note:
// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.

// Follow up:
// Can you solve it in O(N) time and O(1) space?

// Solution 1: 
// Time Complexity: O(n)
// Space Complexity: O(n)
const backspace = (str) => {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "#") {
      arr.push(str[i]);
    } else {
      arr.pop();
    }
  }

  return arr.join('');
};


var backspaceCompare = function(S, T) {
  return backspace(S) === backspace(T);
};

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a##c", "#a#c")); // true
console.log(backspaceCompare("a#c", "b")); // false