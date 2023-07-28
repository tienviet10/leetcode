// * 289. Game of Life

// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.


// Example 1:
// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

var gameOfLife = function(board) {
  // Initial.      Final.         Symbol
  // 0             0              0
  // 1             0              1
  // 0             1              2
  // 1             1              3

  const getNumberOfNei = (r, c) => {
    let count = 0;
    for (let i = r - 1; i <= r + 1; i++) {
      for (let j = c - 1; j <= c + 1; j++) {
        if (i >= 0 && j >= 0 && i < board.length && j < board[0].length && [1, 3].includes(board[i][j]) && !(i === r && j === c)) {
          count++;
        }
      }
    }
    return count;
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const neis = getNumberOfNei(row, col);
      if (board[row][col] && [2, 3].includes(neis)) {
        board[row][col] = 3;
      } else if (neis === 3) {
        board[row][col] = 2;
      }
    }
  }


  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 1) {
        board[row][col] = 0;
      } else if ([2, 3].includes(board[row][col])) {
        board[row][col] = 1;
      }
    }
  }

  return board;
};