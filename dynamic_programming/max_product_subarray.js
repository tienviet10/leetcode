// 152. Maximum Product Subarray

// Given an integer array nums, find a
// subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.


// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.


const maxProduct = function(nums) {
  let res = nums[0],
    minVal = 1,
    maxVal = 1;

  for (const num of nums) {
    let tmp = minVal * num;
    minVal = Math.min(num, tmp, maxVal * num);
    maxVal = Math.max(num, tmp, maxVal * num);
    res = Math.max(res, maxVal);
  }

  return res;
};