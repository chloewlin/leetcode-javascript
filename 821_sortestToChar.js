// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

// Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

// Note:
// S string length is in [1, 10000].
// C is a single character, and guaranteed to be in string S.
// All letters in S and C are lowercase.

// TODO: debug
var shortestToChar = function(S, C) {
  let res = [];
  S = [...S];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) res.push(0);
    let shortest = S.indexOf(C);

  }
  return res;
};

console.log(shortestToChar("loveleetcode", 'e'));
