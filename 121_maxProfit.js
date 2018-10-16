// Time Complexity: O(n2)
var maxProfit = function(prices) {
  let greatestDiff = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (prices[i] - prices[j] > greatestDiff) {
        greatestDiff = prices[i] - prices[j];
      }
    }
  }
  
  return greatestDiff;
};

// Time Complexity: O(n)
var maxProfit = function(prices) {
  var min = prices[0];
  var greatestDiff = 0; 
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > greatestDiff) {
      greatestDiff = prices[i] - min;
    } 
  }
  return greatestDiff;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 2, 12, 5, 3, 6, 4])); // 10