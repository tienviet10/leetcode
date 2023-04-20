// 74. Search a 2D Matrix

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

const searchMatrix = function(matrix, target) {
  let rowTop = 0,
    rowBottom = matrix.length - 1;

  while (rowTop <= rowBottom) {
    let midRow = Math.floor((rowTop + rowBottom) / 2);
    if (target < matrix[midRow][0]) {
      rowBottom = midRow - 1;
    } else if (target > matrix[midRow][matrix[midRow].length - 1]) {
      rowTop = midRow + 1;
    } else {
      break;
    }
  }

  if (rowTop > rowBottom) return false;
  const midRow = Math.floor((rowTop + rowBottom) / 2);

  let l = 0,
    r = matrix[midRow].length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (target > matrix[midRow][mid]) {
      l = mid + 1;
    } else if (target < matrix[midRow][mid]) {
      r = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};