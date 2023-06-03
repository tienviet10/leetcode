// 57. Insert Interval

// You are given an array of non - overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals(merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

const insert = function(intervals, newInterval) {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > newInterval[1]) {
      result.push(newInterval);
      return result.concat(intervals.slice(i));
    } else if (intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
    } else {
      newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
      newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    }
  }

  result.push(newInterval);
  return result;
};