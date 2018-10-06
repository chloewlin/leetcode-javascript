const nums = {
  I: 1, 
  V: 5, 
  X: 10, 
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const romanToInt = (s) => {
  let total = 0;
  let prev = null;
  for (let i = 0; i < s.length; i++) {
    if (prev) {
      if (nums[s[i]] > prev) {
        total += (nums[s[i]] - prev);
        prev = null;
      } else {
        total += prev;
        prev = nums[s[i]];
      }
    } else {
      prev = nums[s[i]];
    }
  }
  return prev ? total + prev : total;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('XL')); // 40
console.log(romanToInt('CM')); // 900
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994