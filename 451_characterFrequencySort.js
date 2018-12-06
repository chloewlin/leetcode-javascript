// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:
// Input: "tree"
// Output: "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:
// Input: "cccaaa"
// Output: "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:
// Input: "Aabb"
// Output: "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

const frequencySort = (s) => {
  let arr = [...s];
  let count = {};
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = count[arr[i]] + 1 || 1;
  }

  // sort count object by frequency
  Object.keys(count).sort((a,b) => count[b] - count[a]).forEach(function(v){
    for (var j = 0; j < count[v]; j++) {
      result += v;
    }
  });
  
  return result;
};

console.log(frequencySort("tree")); // "eert"
console.log(frequencySort("cccaaa")); // "cccaaa" or "aaaccc"
console.log(frequencySort("Aabb")); // "bbAa" or "bbaA"