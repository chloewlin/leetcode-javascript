// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all 
// strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 
// 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

// Example 1:
// Input: ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: ["cool","lock","cook"]
// Output: ["c","o"]
 
// Note:

// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter

var commonChars = function(A) {
  let first = [...A[0]];

  for (let i = 1; i < A.length; i++) {
    let currChar = [...A[i]];
    first = first.filter(char => {
      let idx = currChar.indexOf(char);
      return idx > -1 ? currChar[idx] = true : false;
    });
  }
  
  return first;
};

// Tests
console.log(commonChars(["bella","label","roller"])); //  ["e","l","l"]
console.log(commonChars(["cool","lock","cook"])); // ["c","o"]

let a = [1, 2, 3];
let b = [145, 1789, 1000];

for (let i = 1; i < b.length; i++) {
  let currNum = [...b[i].toString()].map(w => +w);
  
  a = a.filter(a => {
    let idx = currNum.indexOf(a);
    return idx > -1 ? currNum[idx] = true : false;
  });
  console.log(currNum);
}

console.log(a);
