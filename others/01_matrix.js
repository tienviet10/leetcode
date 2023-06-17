// * 542. 01 Matrix

// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Example 1:
// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]


const updateMatrix = function(mat) {
  let stack = [],
    count = 1;

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] === 0) {
        stack.push([row, col]);
      };
      if (mat[row][col] === 1) mat[row][col] = 'X';
    }
  }

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  while (stack.length) {
    const tempStack = [];
    for (const zero of stack) {
      for (const dir of dirs) {
        const newRow = zero[0] + dir[0];
        const newCol = zero[1] + dir[1];
        if (newRow >= 0 && newRow < mat.length && newCol >= 0 && newCol < mat[0].length && mat[newRow][newCol] === 'X') {
          mat[newRow][newCol] = count;
          tempStack.push([newRow, newCol]);
        }
      }
    }

    stack = tempStack;
    count++;
  }

  return mat;
};