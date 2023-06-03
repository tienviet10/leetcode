// * 56. Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].


const merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (const [start, end] of intervals.slice(1)) {
    const lastVal = result[result.length - 1][1];
    if (lastVal < start) {
      result.push([start, end]);
    } else {
      result[result.length - 1][1] = Math.max(lastVal, end);
    }
  }

  return result;
};