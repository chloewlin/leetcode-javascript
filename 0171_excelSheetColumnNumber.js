// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...

// Example 1:
// Input: "A"
// Output: 1

// Example 2:
// Input: "AB"
// Output: 28

// Example 3:
// Input: "ZY"
// Output: 701

var titleToNumber = function(s) {
  return s.split('').reverse().reduce((acc,v,i) => acc + Math.pow(26,i)*(v.charCodeAt(0) - 64), 0);  
};