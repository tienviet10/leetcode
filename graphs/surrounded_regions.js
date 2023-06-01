// * 130. Surrounded Regions

// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.


// Example 1:
// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.


const solve = function(board) {
  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || board[row][col] !== "O") return;
    board[row][col] = "T";
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'O' && (row === 0 || col === 0 || row === board.length - 1 || col === board[0].length - 1)) {
        dfs(row, col);
      }
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === "T") {
        board[row][col] = "O";
      } else if (board[row][col] === "O") {
        board[row][col] = "X";
      }
    }
  }

  return board;
};