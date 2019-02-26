// On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly 
// K moves. The rows and columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right 
// square is (N-1, N-1).

// A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in 
// a cardinal direction, then one square in an orthogonal direction.

// Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if 
//   the piece would go off the chessboard) and moves there.

// The knight continues moving until it has made exactly K moves or has moved off the chessboard. Return 
// the probability that the knight remains on the board after it has stopped moving.

// Example:

// Input: 3, 2, 0, 0
// Output: 0.0625
// Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
// From each of those positions, there are also two moves that will keep the knight on the board.
// The total probability the knight stays on the board is 0.0625.
 
// Note:
// N will be between 1 and 25.
// K will be between 0 and 100.
// The knight always initially starts on the board.


const knightProbability = (N, steps, row, col) => {
  const cache = {};

  // Inner recursive function 
  const dfs = (row, col, steps) => {
    const key = `${steps}:${row}:${col}`;

    if (cache[key]) {
      return cache[key];
    }

    if (row < 0 || col < 0 || row >= N || col >= N) return 0;
    if (steps === 0) return 1;

    let inbound = 0;

    // Eight possible moves for each position
    // Upper right
    inbound += dfs(row + 2, col + 1, steps - 1);
    inbound += dfs(row + 1, col + 2, steps - 1);
    // Upper left
    inbound += dfs(row - 2, col + 1, steps - 1);
    inbound += dfs(row - 1, col + 2, steps - 1);
    // Lower right
    inbound += dfs(row + 2, col - 1, steps - 1);
    inbound += dfs(row + 1, col - 2, steps - 1);
    // Lower left
    inbound += dfs(row - 2, col - 1, steps - 1);
    inbound += dfs(row - 1, col - 2, steps - 1);

    cache[key] = inbound;
    return inbound;
  }

  let moves = dfs(row, col, steps);
  return moves/Math.pow(8, steps);
};


console.log(knightProbability(3, 2, 0, 0)); // 0.0625
console.log(knightProbability(1, 0, 0, 0)); // 1.0
console.log(knightProbability(3, 3, 0, 0)); // 0.015625
//                        [0,0]
//                        /    \
//                     [1,2]    [2,1] -------->  2/8 = 1/4
//                     /  \      /   \
// 2/8 = 1/4 <-----  [0,0] [0,2][0,0][2.0] -------->  2/8 = 1/4 
//                     
// probability: 1 x 1/4 * 1/4 = 1/16 = 0.0625
