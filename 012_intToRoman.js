// Convert a number to a roman numeral
var intToRoman = function(num) {
  var result = "";
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for (var i = 0; i < numbers.length; i++) {
    while (num % numbers[i] < num) {
      result += romanNumerals[i];
      num = num - numbers[i];
    }
  }
  return result;
};

console.log(intToRoman(3)); // "III"
console.log(intToRoman(4)); // "IV"
console.log(intToRoman(9)); // "IX"
console.log(intToRoman(58)); // "LVIII"
console.log(intToRoman(1994)); // "MCMXCIV"