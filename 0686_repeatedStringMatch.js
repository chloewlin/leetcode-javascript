// Given two strings A and B, find the minimum number of times A has to be repeated such that B is a 
// substring of it. If no such solution, return -1.

// For example, with A = "abcd" and B = "cdabcdab".

// Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is 
// not a substring of A repeated two times ("abcdabcd").

// Note:
// The length of A and B will be between 1 and 10000.

var repeatedStringMatch = function(A, B) {
  const count = Math.ceil(B.length / A.length);
  const newStr = A.repeat(count);
  return newStr.includes(B) ? count : (newStr + A).includes(B) ? count + 1 : -1;   
};

// Tests
console.log(repeatedStringMatch("a", "a")); // 1
console.log(repeatedStringMatch("a", "aa")); // 2
console.log(repeatedStringMatch("acdfg", "xyz")); // -1
console.log(repeatedStringMatch("hello", "ll")); // 1
console.log(repeatedStringMatch("hello", "llohe")); // 2
console.log(repeatedStringMatch("abcd", "cdabcdab")); // 3
