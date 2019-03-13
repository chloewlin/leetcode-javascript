// On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, 
// and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase 
// characters represent white pieces, and lowercase characters represent black pieces.

// The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, 
// west, and south), then moves in that direction until it chooses to stop, reaches the edge of the 
// board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, 
// rooks cannot move into the same square as other friendly bishops.

// Return the number of pawns the rook can capture in one move.

// Example 1:
const input1 = [
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".","R",".",".",".","p"],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."]
];
// Output: 3
// Explanation: 
// In this example the rook is able to capture all the pawns.

// Example 2:
const input2 = [
  [".",".",".",".",".",".",".","."],
  [".","p","p","p","p","p",".","."],
  [".","p","p","B","p","p",".","."],
  [".","p","B","R","B","p",".","."],
  [".","p","p","B","p","p",".","."],
  [".","p","p","p","p","p",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."]
];
// Output: 0
// Explanation: 
// Bishops are blocking the rook to capture any pawn.

// Example 3:
const input3 = [
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  ["p","p",".","R",".","p","B","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".","B",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".",".",".",".",".","."]
];
// Output: 3
// Explanation: 
// The rook can capture the pawns at positions b5, d6 and f5.

// Note:

// board.length == board[i].length == 8
// board[i][j] is either 'R', '.', 'B', or 'p'
// There is exactly one cell with board[i][j] == 'R'

// TODO: debug - maximum call stack size exceeded
const numRookCaptures = (board) => {
  let rook;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 'R') rook = [i, j];
    }
  }

  console.log(rook);
  const findCaptures = (board, row, col) => {
    console.log(row, col);
    let res = 0;

    if (row < 0 || col < 0 || row >= 8 || col >= 8) return res; 
    if (board[row][col] === 'B') return;
    if (board[row][col] === 'p') res++;

    res = findCaptures(board, row + 1, col)
      + findCaptures(board, row - 1, col);
      + findCaptures(board, row, col + 1);
      + findCaptures(board, row, col - 1);

    return res;
  };
  let captures = findCaptures(board, rook[0], rook[1]);

  // console.log(captures);
};

// Tests
console.log(numRookCaptures(input1));
// console.log(numRookCaptures(input2));
// console.log(numRookCaptures(input3));
