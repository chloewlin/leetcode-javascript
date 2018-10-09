const longestCommonPrefix = (strs) => {
  if (strs.length < 1) return "";
  let sortedArr = strs.sort();
  let first = sortedArr[0];
  let last = sortedArr[sortedArr.length - 1];
  let i = 0;
  while (i < first.length && first.charAt(i) === last.charAt(i)) {
    i++;
  } 
  return first.substring(0, i) || "";
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""