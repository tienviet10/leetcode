// * 36. Valid Sudoku

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// Example 1:

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true


const isValidSudoku = function(board) {
  const cols = new Map(),
    rows = new Map(),
    squares = new Map();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const squareLocation = Math.floor(i / 3) + "," + Math.floor(j / 3);
      if (board[i][j] === ".") continue;
      if (
        (cols.get(j) && cols.get(j).has(board[i][j])) ||
        (rows.get(i) && rows.get(i).has(board[i][j])) ||
        (squares.get(squareLocation) && squares.get(squareLocation).has(board[i][j]))
      ) {
        return false;
      }
      cols.get(j) ? cols.get(j).add(board[i][j]) : cols.set(j, new Set([board[i][j]]));
      rows.get(i) ? rows.get(i).add(board[i][j]) : rows.set(i, new Set([board[i][j]]));
      squares.get(squareLocation) ? squares.get(squareLocation).add(board[i][j]) : squares.set(squareLocation, new Set([board[i][j]]));
    }
  }
  return true;
};