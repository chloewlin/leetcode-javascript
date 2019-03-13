// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.

var countAndSay = function(n) {
  var str = '1';

  for (var i = 1; i < n; i++) {
    var strArray = [...str];
    str = '';
    var count = 1;
    
    for (var j = 0; j < strArray.length; j++) {
      if (strArray[j] !== strArray[j + 1]) {
        str += count + strArray[j];
        count = 1;
      } else {
        count++;
      }
    }
  }

  return str;
};

// Tests
console.log(countAndSay(1)); // 1
console.log(countAndSay(2)); // 11
console.log(countAndSay(3)); // 21
console.log(countAndSay(4)); // 1211
