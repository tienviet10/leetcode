// * 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


// Example 1:
// Input: nums = [3,2,3]
// Output: 3

const majorityElement = function(nums) {
  const hash = {};
  let maxVal = [1, nums[0]];

  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1;
    if (hash[num] > maxVal[0]) {
      maxVal = [hash[num], num];
    }
  }

  return maxVal[1];
};