// * 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

const containsDuplicate = function(nums) {
  const placeholder = new Set();

  for (const num of nums) {
    if (placeholder.has(num)) {
      return true;
    } else {
      placeholder.add(num);
    }
  }

  return false;
};
