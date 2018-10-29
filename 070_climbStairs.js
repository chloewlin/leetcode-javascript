// Time Complexity: O(n)
var climbStairs = function(n) {
  // if (n < 0) return 0;
  // if (n === 0) return 1;
  // return climbStairs(n - 1) + climbStairs(n - 2);
  const mem = [];
  var climb = function(n) {
    if (mem[n]) return mem[n];
    
    var result;
    if (n < 0) {
      result = 0;
    } else if (n === 0) {
      result = 1;
    } else {
      result = climb(n - 1) + climb(n - 2);
    }

    mem[n] = result;
    return result;
  }
  return climb(n);
};

console.log(climbStairs(4));
console.log(climbStairs(5));