// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


// Example:
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Although the above answer is in lexicographical order, your answer could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */

var numberToDigit = {
  0: '0',
  1: '1',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv', 
  9: 'wxyz'
}

var letterCombinations = function(digits) {
  let combinations = [];

  if (digits.length === 0) { 
    return []; 
  }
  
  const generateCombos = function(word, digitsLeft) {
    if (digitsLeft.length === 0) {
      return combinations.push(word);
    }
    const currentDigit = digitsLeft[0];
    const letters = numberToDigit[currentDigit].split('');

    for (let i = 0; i < letters.length; i++) {
      generateCombos(word + letters[i], digitsLeft.slice(1));
    }

  }
  generateCombos('', digits.split(''));

  return combinations;
};

console.log(letterCombinations("23")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
console.log(letterCombinations("1")); // ["1"];
console.log(letterCombinations("")); // []