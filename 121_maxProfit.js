// Time Complexity: O(n2)
var maxProfit = function(prices) {
  let greatestDiff = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > greatestDiff) {
        greatestDiff = prices[j] - prices[i];
      }
    }
  }
  
  return greatestDiff;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 2, 12, 5, 3, 6, 4])); // 10