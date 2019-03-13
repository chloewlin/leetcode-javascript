// Given an array of strings, group anagrams together.

// Example:
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// Note:
// All inputs will be in lowercase.
// The order of your output does not matter.

// Time Complexity: O(n)
var groupAnagrams = function(strs) {
  const map = {};

  for (let str of strs) {
    const key = [...str].sort().join(''); // sort by alphabet
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }
    
  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [['eat', 'tea', 'ate'], ['tan', 'nat'], [ bat']]
console.log(groupAnagrams(["cat", "tac", "abba", "baab", "hannah", "nahhan"]));
// [['cat', 'tac'], ['abba', 'baab'], ['hannah', 'nahhan']]
