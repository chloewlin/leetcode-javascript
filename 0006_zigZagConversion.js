// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display 
// this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Solution 1: Sort by Row
// O(n) time, O(n) space
const convert = function(s, numRows) {
  for (var result = [], i = 0, row = 0, step = 1; i < s.length; i++) {
    if (result[row] === undefined) result[row] = ''; 
    result[row] += s[i];
    if (row === 0) step = 1;
    else if (row === numRows - 1) step = -1;
    row += step;
  }
  return result.join('');
};

console.log(convert("AB", 1)); // "AB"

console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
// P   A   H   N  ---> row = 0
// A P L S I I G  ---> row = 1
// Y   I   R      ---> row = 2

console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
