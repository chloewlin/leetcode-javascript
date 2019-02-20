// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:
// Input: "()", Output: true

// Example 2:
// Input: "()[]{}", Output: true

// Example 3:
// Input: "(]", Output: false

// Example 4:
// Input: "([)]", Output: false

// Example 5:
// Input: "{[]}", Output: true

// Solution: Using stack
// Time complexity: O(n), n is the length of the input string
// Space complexity: O(n)
const isValid = (s) => {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (pairs[s[i]]) {
      stack.push(pairs[s[i]]);
    } else {
      let popped = stack.pop();
      if (popped !== s[i]) return false;
    }
  }

  // check if there is anything left in stack
  return stack.length === 0; 
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(}")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
// Edge cases: 
console.log(isValid("[")); // Should be false
console.log(isValid("((")); // Should be false
