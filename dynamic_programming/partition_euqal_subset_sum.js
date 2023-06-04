// * Partition Equal Subset Sum

// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Example 1:
// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].


const canPartition = function(nums) {
  let total = 0;

  for (const num of nums) {
    total += num;
  }

  if (total % 2 !== 0) return false;

  const target = total / 2;
  let que = new Set([0]);

  for (const num of nums) {
    let newSet = new Set();
    for (const oldNum of que) {
      newSet.add(oldNum + num);
      newSet.add(oldNum);
    }
    que = newSet;
  }

  return que.has(target);
};