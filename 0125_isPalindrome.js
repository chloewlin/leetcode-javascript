var isPalindrome = function(s) {
  if (s.length < 1) return true;
  var original = s.toLowerCase().replace(/[-"',:;.@!?()#` ]/g, "");
  var reversed = original.split('').reverse().join('');
  return original === reversed;
}; 

// Checks the edge cases below:
// Use replace(/[^\w]/g, "") will also skip any non-word characters!
console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //false
console.log(isPalindrome("")); //true
console.log(isPalindrome("a.")); //true
console.log(isPalindrome("ab@a")); //true
console.log(isPalindrome("c#dc")); //true
console.log(isPalindrome("A man, a plan, a canal -- Panama")); //true
console.log(isPalindrome("Live on evasions? No, I save no evil.")); //true
console.log(isPalindrome("Marge, let's \"went.\" I await news telegram.")); //true
console.log(isPalindrome("I, man, am regal; a German am I.")); //true
console.log(isPalindrome("Egad! Loretta has Adams as mad as a hatter. Old age!")); // true
console.log(isPalindrome('a*a')); // true
console.log(isPalindrome("Damosel, a poem? A carol? Or a cameo pale? (So mad!)")); // true
console.log(isPalindrome("`l;`` 1o1 ??;l`")); // true