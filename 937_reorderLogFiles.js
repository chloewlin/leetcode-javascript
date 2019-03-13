// TODO: clean up code 
var reorderLogFiles = function(logs) {
  var letters = [], digits = [];

  logs.forEach((log) => {
    var type = log.split(" ")[1];
    return !Number(type) ? letters.unshift(log) : digits.push(log);
  });

  letters.sort(function (a, b) {
    return a.split(" ")[1].localeCompare(b.split(" ")[1]) || a.split(" ")[2].localeCompare(b.split(" ")[2])
  });

  return letters.concat(digits);
};

var reorderLogFiles = function(logs) {
  let letter = [], digit = [];
  for(let v of logs) {
      if(v.split(" ")[1].charAt(0) >= '0' && v.split(" ")[1].charAt(0) <= '9'){
          digit.push(v);
      } else {
          letter.push(v);
      }
  }
  letter.sort(function (a, b) {
      return a.split(" ")[1].localeCompare(b.split(" ")[1]) || a.split(" ")[2].localeCompare(b.split(" ")[2])
  })
  return letter.concat(digit);
};

console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]));
// ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
console.log(reorderLogFiles(["7 96", "d 0 5", "r 439", "1 bw", "6 dkf"]));
// ["1 bw","6 dkf","7 96","d 0 5","r 439"]