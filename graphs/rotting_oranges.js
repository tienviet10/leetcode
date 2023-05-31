// * 994. Rotting Oranges

// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

const orangesRotting = function(grid) {
  const queue = [];
  let freshOranges = 0,
    time = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) freshOranges++;

      if (grid[row][col] === 2) queue.push([row, col]);
    }
  }

  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (queue.length && freshOranges) {
    const size = queue.length;

    for (let loc of queue.splice(0, size)) {
      for (let [r, c] of dir) {
        const newRow = loc[0] + r;
        const newCol = loc[1] + c;

        if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length && grid[newRow][newCol] === 1) {
          grid[newRow][newCol] = 2;
          freshOranges--;
          queue.push([newRow, newCol]);
        }
      }
    }
    time++;
  }
  return freshOranges ? -1 : time;
};
