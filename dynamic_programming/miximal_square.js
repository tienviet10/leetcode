// * 221. Maximal Square

// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example 1:
// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4

const maximalSquare = function(matrix) {
  let solution = 0,
    prev = 0;
  const cache = new Array(matrix[0].length + 1).fill(0);

  for (let row = 1; row <= matrix.length; row++) {
    for (let col = 1; col <= matrix[0].length; col++) {
      const temp = cache[col];
      if (matrix[row - 1][col - 1] === "1") {
        cache[col] = Math.min(prev, cache[col - 1], cache[col]) + 1;
        solution = Math.max(solution, cache[col]);
      } else {
        cache[col] = 0;
      }
      prev = temp;
    }
  }

  return solution * solution;
};