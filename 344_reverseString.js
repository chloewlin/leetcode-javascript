// Write a function that takes a string as input and returns the string reversed.

// Example 1:

// Input: "hello"
// Output: "olleh"
// Example 2:

// Input: "A man, a plan, a canal: Panama"
// Output: "amanaP :lanac a ,nalp a ,nam A"

// Time Complexity: O(n)
var reverseString = function(s) {
  let reversed = '';
  for (let char of s) {
    reversed = char + reversed;
  }  
  return reversed; 
};

console.log(reverseString("hello"));
console.log(reverseString("A man, a plan, a canal: Panama"));