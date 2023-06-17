// * 53. Maximum Subarray

// Given an integer array nums, find the
// subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

const maxSubArray = function(nums) {
  // ? Method 1
  // let max = nums[0];
  // let sum = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   sum = Math.max(nums[i], sum + nums[i]);
  //   max = Math.max(max, sum);
  // }
  // return max;

  // ? Method 2
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    max = Math.max(max, nums[i]);
  }
  return max;
};