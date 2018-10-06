function reverseInt(num) {
  numStr = num.toString().split('');
  if (num > 0) {
    return Number(numStr.reverse().join(''))
  } else { 
    return parseInt("-" + Number(numStr.slice(1).reverse().join('')));  
  } 
}

console.log(reverseInt(123)); // 321
console.log(reverseInt(120)); // 21
console.log(reverseInt(-123)); // -321
console.log(reverseInt(12000)); // 21
console.log(reverseInt(-1234)); // -4321