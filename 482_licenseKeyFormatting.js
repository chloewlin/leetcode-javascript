// You are given a license key represented as a string S which consists only alphanumeric character and dashes. 
// The string is separated into N+1 groups by N dashes.

// Given a number K, we would want to reformat the strings such that each group contains exactly K characters, 
// except for the first group which could be shorter than K, but still must contain at least one character. 
// Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted 
// to uppercase.

// Given a non-empty string S and a number K, format the string according to the rules described above.

// Example 1:
// Input: S = "5F3Z-2e-9-w", K = 4
// Output: "5F3Z-2E9W"

// Explanation: The string S has been split into two parts, each part has 4 characters.
// Note that the two extra dashes are not needed and can be removed.

// Example 2:
// Input: S = "2-5g-3-J", K = 2
// Output: "2-5G-3J"

// Explanation: The string S has been split into three parts, each part has 2 characters except the first part 
// as it could be shorter as mentioned above.

// Note:
// The length of string S will not exceed 12,000, and K is a positive integer.
// String S consists only of alphanumerical characters (a-z and/or A-Z and/or 0-9) and dashes(-).
// String S is non-empty.

var licenseKeyFormatting = function(S, K) {
  let res = "";
  let completeString = S.replace(/-/g, "");
  
  for (let i = completeString.length - 1; i >= 0; i--) {
    res = `${completeString[i]}${res}`;
  
    if ((completeString.length - i) % K === 0 && i > 0) {
      res =`-${res}`;
    }
  }
  
  return res.toUpperCase();
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); // "5F3Z-2E9W"
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 2)); // "5F-3Z-2E-9W"
console.log(licenseKeyFormatting("2-5g-3-J", 2)); // "2-5G-3J"
console.log(licenseKeyFormatting("2-4A0r7-4k", 4)); // "24A0-R74K"
console.log(licenseKeyFormatting("2-4A0r7-4k", 3)); // "24-A0R-74K"
console.log(licenseKeyFormatting("2", 2)); // "2"
console.log(licenseKeyFormatting("-----------", 100)); // ""
console.log(licenseKeyFormatting("r", 1)); // "R"
console.log(licenseKeyFormatting("aaaa", 2)); // "AA-AA"