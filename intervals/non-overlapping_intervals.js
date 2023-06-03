// * 435. Non-overlapping Intervals

// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Example 1:
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

const eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let count = 0,
    prev = intervals[0][1];

  for (const [start, end] of intervals.slice(1)) {
    if (start >= prev) {
      prev = end;
    } else {
      count++;
      prev = Math.min(prev, end);
    }
  }

  return count;
};