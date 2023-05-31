// * 695. Max Area of Island

// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

// Example 1:

// Input: grid = [
// [0,0,1,0,0,0,0,1,0,0,0,0,0],
// [0,0,0,0,0,0,0,1,1,1,0,0,0],
// [0,1,1,0,1,0,0,0,0,0,0,0,0],
// [0,1,0,0,1,1,0,0,1,0,1,0,0],
// [0,1,0,0,1,1,0,0,1,1,1,0,0],
// [0,0,0,0,0,0,0,0,0,0,1,0,0],
// [0,0,0,0,0,0,0,1,1,1,0,0,0],
// [0,0,0,0,0,0,0,1,1,0,0,0,0]
// ];
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

const maxAreaOfIsland = function(grid) {
  const visit = new Set();
  let count = 0,
    maxVal = 0;

  const dfs = (row, col) => {
    // return when it is out of bound
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;

    // return when it is water or visited
    if (grid[row][col] === 0 || visit.has(`${row},${col}`)) return;

    visit.add(`${row},${col}`);
    count++;

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      count = 0;
      if (!visit.has(`${row},${col}`) && grid[row][col] === 1) {
        dfs(row, col);
        maxVal = Math.max(maxVal, count);
      }
    }
  }

  return maxVal;
};