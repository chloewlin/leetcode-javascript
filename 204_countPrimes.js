const isPrime = function(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

var countPrimes = function(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
};

// console.log(isPrime(4));
// console.log(countPrimes(10)); // 4 (2, 3, 5, 7)
// console.log(countPrimes(10000)); // 1229