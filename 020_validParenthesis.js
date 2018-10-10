const isValid = function(s) {
  let stack = [];
  const openParens = {
    '(': ')',
    '[': ']',
    '{': '}',
  }; 
  const closingParens = {
    ')': '(',
    ']': '[',
    '}': '{',
  } 
  for (var i = 0; i < s.length; i++) {
    if (openParens[s[i]]) {
      stack.push(s[i]);
    }
    if (closingParens[s[i]]) {
      if (stack.pop() !== closingParens[s[i]]) {
        return false;
      }
    }
  }
  console.log(stack);
  if (s.length < 2) return false;
  return stack.length < 1 ? true: false;
};
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(}")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
// Edge cases: 
console.log(isValid("[")); // Should be false
console.log(isValid("((")); // Should be false