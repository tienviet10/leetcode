// * 63. Unique Paths II

// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:
// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

const uniquePathsWithObstacles = function(obstacleGrid) {
  const maxRow = obstacleGrid.length,
    maxCol = obstacleGrid[0].length;
  const dp = new Array(maxCol).fill(0);
  dp[dp.length - 1] = 1;

  for (let row = maxRow - 1; row >= 0; row--) {
    for (let col = maxCol - 1; col >= 0; col--) {
      if (obstacleGrid[row][col]) {
        dp[col] = 0;
      } else if (col + 1 < maxRow) {
        dp[col] = dp[col] + dp[col + 1];
      }
    }
  }

  return dp[0];
};