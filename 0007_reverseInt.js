var reverse = function(x) {
  for (res = 0; x !== 0; x = Math.trunc(x / 10)) res = res * 10 + x % 10;
  return Math.abs(res) > 2**31 ? 0 : res;
};

// var reverseInt = function(x) {
//   let numStr = x.toString().split('');
//   let num = 0;
  
//   if (Math.abs(x) < 2**31) {
//     if (x > 0) {
//       num = +numStr.reverse().join('');
//     } else { 
//       num = parseInt("-" + numStr.slice(1).reverse().join(''));  
//     } 
//   } 
  
//   if (Math.abs(num) > 2**31) {
//     num = 0;
//   }
  
//   if (x === 0) return 0;
//   return num; 
// };

console.log(reverseInt(123)); // 321
console.log(reverseInt(120)); // 21
console.log(reverseInt(-123)); // -321
console.log(reverseInt(12000)); // 21
console.log(reverseInt(-1234)); // -4321
console.log(reverseInt(0)); // 0
console.log(reverseInt(1534236469)); // 0