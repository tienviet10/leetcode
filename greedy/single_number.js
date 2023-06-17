// * 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

const singleNumber = function(nums) {
  if (nums.length === 1) return nums[0];

  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i += 2) {
    if (nums[i] !== nums[i - 1]) {
      return nums[i - 1];
    }
  }

  return nums[nums.length - 1];
};