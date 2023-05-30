// 79. Word Search

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

const exist = function(board, word) {
  // Cannot use the same cell twice -> use array to keep track of visited cells
  const currWord = [];

  const searchWords = (row, col, i) => {
    if (i === word.length) return true;
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[i] || currWord.includes(row + ',' + col)) return false;

    currWord.push(row + ',' + col);
    const decide = searchWords(row + 1, col, i + 1) || searchWords(row - 1, col, i + 1) || searchWords(row, col + 1, i + 1) || searchWords(row, col - 1, i + 1);
    currWord.pop();

    return decide;
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (searchWords(row, col, 0)) return true;
    }
  }
  return false;
};

