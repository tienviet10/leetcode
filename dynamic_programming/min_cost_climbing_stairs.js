// * 746. Min Cost Climbing Stairs

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.


// Example 1:
// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

const minCostClimbingStairs = function(cost) {
  const dp = new Array(cost.length + 1);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 1]) + (cost[i] || 0);
  }

  return dp[cost.length];
};