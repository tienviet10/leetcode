// * 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

const productExceptSelf = function(nums) {
  const res = new Array(nums.length).fill(1);

  let preProd = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    preProd *= nums[i];
    res[i + 1] *= preProd;
  }

  let postProd = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    postProd *= nums[i];
    res[i - 1] *= postProd;
  }

  return res;
};