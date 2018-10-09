var reverse = function(x) {
  let numStr = x.toString().split('');
  let num = 0;
  
  if (Math.abs(x) < Math.pow(2, 31)) {
    if (x > 0) {
      num = +numStr.reverse().join('');
    } else { 
      num = parseInt("-" + numStr.slice(1).reverse().join(''));  
    } 
  } 
  
  if (Math.abs(num) > Math.pow(2, 31)) {
    num = 0;
  }
  
  if (x === 0) return 0;
  return num; 
};

console.log(reverseInt(123)); // 321
console.log(reverseInt(120)); // 21
console.log(reverseInt(-123)); // -321
console.log(reverseInt(12000)); // 21
console.log(reverseInt(-1234)); // -4321
console.log(reverseInt(0));
console.log(reverseInt(1534236469)); // Should be 0