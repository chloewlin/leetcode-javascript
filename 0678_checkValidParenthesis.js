// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this 
// string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

// Example 1:
// Input: "()"
// Output: True

// Example 2:
// Input: "(*)"
// Output: True

// Example 3:
// Input: "(*))"
// Output: True

// Note:
// The string size will be in the range [1, 100].

// TODO: debug
var checkValidString = function(s) {
  let stack = [];
  let asterisk = 0;
  let isValid = true;
  let closingParens = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      asterisk++;
    } else if (s[i] === '(') {
      stack.push(')');
      closingParens--;
    } else if (s[i] === ')') {
      stack.pop(); 
      closingParens++;
    } 
  }
  if (stack.length > asterisk) {
    isValid = false;
  }
  return isValid && closingParens === 0;
};

// Tests
console.log(checkValidString('()')); // true
console.log(checkValidString('(*)')); // true, * is ''
console.log(checkValidString('(*))')); // true, , * is ')'
console.log(checkValidString('')); // true
console.log(checkValidString('((*)')); // true, * is '(' 
console.log(checkValidString('()(*')); // true, * is ')'
console.log(checkValidString('()*')); // true, * is ''
console.log(checkValidString('*()')); // true, * is ''
console.log(checkValidString('((**')); // true, * is ')'
console.log(checkValidString('**))')); // true, * is '('
console.log(checkValidString('((*)) ) ')); // true
console.log(checkValidString('(()*))')); // true
console.log(checkValidString('***')); // true
console.log('-----');
console.log(checkValidString('(()')); // false
console.log(checkValidString('((')); // false
console.log(checkValidString('))')); // false
