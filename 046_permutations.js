// Given a collection of distinct integers, return all possible permutations.

// Example:
// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

const permute = function(nums) { 
  let res = [];

  let generatePermute = (curr, remain) => {
    // console.log(curr, remain);
    if (remain.length <= 0) {
      res.push(curr.slice());
    }
    for (let i = 0; i < remain.length; i++) {
      curr.push(remain[i]);
      generatePermute(curr.slice(), remain.slice(0, i).concat(remain.slice(i+1)));
      curr.pop();
    }
  }
  generatePermute([],nums);

  return res;  
};

console.log(permute([1,2,3]));
console.log(permute([1,2,3,4]));
console.log(permute(['a','b','c']));