var findTheDifference = function(s, t) {
  for (var char in s) {
    t = t.replace(s[char], '');
  }
  return t;
};

console.log(findTheDifference("abcd", "abcde")); 