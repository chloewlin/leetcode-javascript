// Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k),
// where h is the height of the person and k is the number of people in front of this person who have a height greater 
// than or equal to h. Write an algorithm to reconstruct the queue.

// Note: The number of people is less than 1,100.

// Example:
// Input:  [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
// Output: [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

// Sort by height (h): from tallest to the shortest
// For people with the same height, sort by order (k)
var sortByHeightAndOrder = (a, b) => {
  if (a[0] != b[0]) {
    return b[0] - a[0];
  } else {
    return a[1] - b[1];
  }
};

var reconstructQueue = function(people) {
  // sort by height and order
  people.sort(sortByHeightAndOrder); // returns the sorted array [[7,0], [7,1], [6,1], [5,0], [5,2], [4,4]]
  
  let result = [];

  // reconstruct queue by inserting person by its k value
  // i.e., insert person at index = people[i][1]
  for (let i = 0; i < people.length; i++) {
    result.splice(people[i][1], 0, people[i]);
  }

  return result;
};

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]));
// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

// How the rest array will reconstruct 
// i = 0, people[i][1] = 0, res = [[7,0]]
// i = 1, people[i][1] = 1, res = [[7,0],[7,1]]
// i = 2, people[i][1] = 1, rres = [[7,0],[6,1],[7,1]]
// i = 3, people[i][1] = 0, res = [[5.0],[7,0],[6,1],[7,1]]
// i = 4, people[i][1] = 2, res = [[5.0],[7,0],[5,2],[6,1],[7,1]]
// i = 5, people[i][1] = 4, res = [[5.0],[7,0],[5,2],[6,1],[4,4],[7,1]]