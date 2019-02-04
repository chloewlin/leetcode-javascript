// Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) 
// so that the resulting parentheses string is valid.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.


// Example 1:
// Input: "())"
// Output: 1

// Example 2:
// Input: "((("
// Output: 3

// Example 3:
// Input: "()"
// Output: 0

// Example 4:
// Input: "()))(("
// Output: 4
 
// Note:
// S.length <= 1000
// S only consists of '(' and ')' characters.

// Solution 1: 
// O(n) time, O(n) space
const minAddToMakeValid = function(S) {
  let num = 0;
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      stack.push(')');
    }
    if (S[i] === ')') {
      if (stack.pop() !== ')') {
        num++;
      } 
    }
  }

  return stack.length === 0 ? num : stack.length + num;
};

// Solution 2
// O(n) time, O(1) space
const minAddToMakeValid2 = (S) => {
  let total = 0;
  let prevOpening = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      total++;
      prevOpening++;
    } else {
      if (prevOpening > 0) {
        total--;
        prevOpening--;
      } else {
        total++;
      }
    }
  }

  return total;
};


// Tests
// console.log(minAddToMakeValid('())')); // 1
// console.log(minAddToMakeValid('(((')); // 3
// console.log(minAddToMakeValid('()')); // 0
// console.log(minAddToMakeValid('()))((')); // 4

// console.log(minAddToMakeValid2('())')); // 1
// console.log(minAddToMakeValid2('(((')); // 3
// console.log(minAddToMakeValid2('()')); // 0
// console.log(minAddToMakeValid2('()))((')); // 4
