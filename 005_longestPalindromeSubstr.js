let isPalindrome = function(str) {
  const originalStr = str.toLowerCase();
  const reversedStr = str.toLowerCase().split('').reverse().join('');
  return originalStr === reversedStr ? true : false;
}
// console.log(isPalindrome("Hannah"));

let longestPalindrome = function(str) {
  let palindromes = [];

  if (str.length < 1) return "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j <= str.length; j++) {
      let substr = str.substr(i, j);
      let length = str.substr(i, j).length;
      if (isPalindrome(substr)) {
        palindromes.push({substr, length});
      }
    }
  }
  console.log(palindromes);
  let maxLength = 0;
  let max = null;
  for (let i = 0; i < palindromes.length; i++) {
    if (palindromes[i].length > maxLength) {
      maxLength = palindromes[i].length;
      max = palindromes[i].substr;
    }
  }
  console.log(maxLength);
  console.log(max);
  return max;
};

console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome(""));