// 739. Daily Temperatures

// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

const dailyTemperatures = function(temperatures) {
  let stack = [[temperatures[0], 0]];
  let res = [...Array(temperatures.length)].fill(0);

  for (let i = 1; i < temperatures.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1][0] >= temperatures[i]) {
      stack.push([temperatures[i], i]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
        res[stack[stack.length - 1][1]] = i - stack[stack.length - 1][1];
        stack.pop();
      }
      stack.push([temperatures[i], i]);

    }
  }
  return res;
};