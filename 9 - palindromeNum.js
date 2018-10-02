// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
var isPalindrome = function(x) {
  const str = x.toString();
  const reversed = str.split('').reverse().join('');
  return str === reversed ? true : false; 
};