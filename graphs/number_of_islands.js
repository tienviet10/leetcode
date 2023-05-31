// * 200. Number of Islands

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

const numIslands = function(grid) {
  const visit = new Set();
  let count = 0;

  const dfs = (row, col) => {
    // return when it is out of bound
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;

    // return when it is water or visited
    if (grid[row][col] === '0' || visit.has(`${row},${col}`)) return;

    visit.add(`${row},${col}`);

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (!visit.has(`${row},${col}`) && grid[row][col] === '1') {
        dfs(row, col);
        count++;
      }
    }
  }

  return count;
};