// * 213. House Robber II

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

const rob = function(nums) {
  if (nums.length === 1) return nums[0];

  const robHelper = (nums) => {
    const dp = new Array(nums.length + 1).fill(0);
    dp[1] = nums[0];
    for (let i = 2; i <= nums.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }
    return dp[nums.length];
  };

  return Math.max(robHelper(nums.slice(0, nums.length - 1)), robHelper(nums.slice(1)));
};

