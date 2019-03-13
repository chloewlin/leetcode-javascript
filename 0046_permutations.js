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

// Solution 1: 
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

// Solution 2: ES6
const permute2 = (arr) => {
  let res = [];

  const generate = (curr, rest) => {
    // console.log(curr, rest);
    if (!rest.length) res.push(curr);

    for (let i = 0; i < rest.length; i++) {
      generate(
        [...curr, rest[i]], 
        [...rest.slice(0, i), ...rest.slice(i + 1)]
      )
    }
  };
  generate([], arr);

  return res;
};

// Tests
// console.log(permute([1,2,3]));
// console.log(permute([1,2,3,4]));
// console.log(permute(['a','b','c']));
