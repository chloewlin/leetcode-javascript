// Given two non-negative integers num1 and num2 represented as strings, 
// return the product of num1 and num2, also represented as a string.

// Example 1:
// Input: num1 = "2", num2 = "3"
// Output: "6"

// Example 2:
// Input: num1 = "123", num2 = "456"
// Output: "56088"

// Note:
// The length of both num1 and num2 is < 110.
// Both num1 and num2 contain only digits 0-9.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

const multiply = (num1, num2) => {
  if (num1 === '0' || num2 === '0') return '0';
  let arr = [];
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      if (arr[i + j] === undefined) {
        arr[i + j] = num1[i] * num2[j];
      } else {
        arr[i + j] += num1[i] * num2[j];
      }
    }
  }
  console.log(arr);

  arr.reverse();
  // TODO
};

// Tests
console.log(multiply("2", "3")); // "6"
console.log(multiply("123", "456")); // "56088"
