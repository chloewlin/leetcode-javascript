function reverseInt(num) {
  numStr = num.toString().split('');
  return num > 0 ? Number(numStr.reverse().join('')) : parseInt("-" + Number(numStr.slice(1).reverse().join('')));  
}

console.log(reverseInt(123)); // 321
console.log(reverseInt(120)); // 21
console.log(reverseInt(-123)); // -321
console.log(reverseInt(12000)); // 21
console.log(reverseInt(-1234)); // -4321