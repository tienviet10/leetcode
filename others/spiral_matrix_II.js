// * 59. Spiral Matrix II

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example 1:
// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]

const generateMatrix = function(n) {
  let t = 0,
    b = n - 1,
    l = 0,
    r = n - 1,
    val = 1;

  const res = [];

  for (let i = 0; i < n; i++) {
    res.push(new Array(n).fill(0));
  }

  while (l <= r && t <= b) {
    for (let i = l; i <= r; i++) {
      res[t][i] = val;
      val++;
    }
    t++;

    for (let i = t; i <= b; i++) {
      res[i][r] = val;
      val++;
    }
    r--;

    if (!(l <= r && t <= b)) break;

    for (let i = r; i >= l; i--) {
      res[b][i] = val;
      val++;
    }
    b--;

    for (let i = b; i >= t; i--) {
      res[i][l] = val;
      val++;
    }
    l++;
  }

  return res;
};