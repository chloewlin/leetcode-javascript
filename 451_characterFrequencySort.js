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

// Solution 1: 
const frequencySort = (s) => {
  let arr = [...s];
  let count = {};
  let result = '';
  
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = count[arr[i]] + 1 || 1;
  }
  
  // sort count object by frequency - O(nlogn)
  Object.keys(count).sort((a,b) => count[b] - count[a]).forEach(function(v){
    for (var j = 0; j < count[v]; j++) { // O(n)
      result += v;
    }
  });
  
  return result;
};

// // Solution 2: ES6 
const frequencySort = (s) => {
  let obj = {};
  [...s].forEach(c => obj[c] = obj[c] + 1 || 1);
  return [...s].sort((a, b) => obj[b] == obj[a] ? a.charCodeAt(0) - b.charCodeAt(0): obj[b] - obj[a]).join("");
};

// Solution 3: Map
const frequencySort = (s) => {
  const map = [...s].reduce((map, char) => map.set(char, map.has(char) ? map.get(char) + char: char), new Map());
  return Array.from(map.values()).sort((a,b) => b.length - a.length).reduce((str, char) => str += char, '');
};

console.log(frequencySort("tree")); // "eert"
console.log(frequencySort("cccaaa")); // "cccaaa" or "aaaccc"
console.log(frequencySort("Aabb")); // "bbAa" or "bbaA"
console.log(frequencySort("loveleetcode")); // "eeeeloolvtcd", should be "eeeeoollvtdc"