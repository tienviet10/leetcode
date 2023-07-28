// * 304. Range Sum Query 2D - Immutable

// Given a 2D matrix matrix, handle multiple queries of the following type:

// Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
// Implement the NumMatrix class:

// NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
// int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
// You must design an algorithm where sumRegion works on O(1) time complexity.

// Example 1:
// Input
// ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
// [[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
// Output
// [null, 8, 11, 12]

// Explanation
// NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
// numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
// numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
// numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)


const NumMatrix = function(matrix) {
  const maxRow = matrix.length,
    maxCol = matrix[0].length;
  this.sumMat = [];

  for (let i = 0; i <= maxRow; i++) {
    this.sumMat.push(new Array(maxCol + 1).fill(0));
  }

  for (let row = 0; row < maxRow; row++) {
    let prefix = 0;
    for (let col = 0; col < maxCol; col++) {
      prefix += matrix[row][col];
      let above = this.sumMat[row][col + 1];
      this.sumMat[row + 1][col + 1] = prefix + above;
    }
  }
};


NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  row1 += 1;
  col1 += 1;
  row2 += 1;
  col2 += 1;

  const bottomRight = this.sumMat[row2][col2];
  const above = this.sumMat[row1 - 1][col2];
  const left = this.sumMat[row2][col1 - 1];
  const topLeft = this.sumMat[row1 - 1][col1 - 1];

  return bottomRight - above - left + topLeft;
};