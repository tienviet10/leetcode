// 90. Subsets II

// Given an integer array nums that may contain duplicates, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Examaple 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

const subsetsWithDup = function(nums) {
  const res = [];
  nums.sort();

  const backtrack = (i, curr) => {
    if (i >= nums.length) {
      res.push(curr.slice());
      return;
    }

    curr.push(nums[i]);
    backtrack(i + 1, curr);
    curr.pop();

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i += 1;
    }
    backtrack(i + 1, curr);
  };

  backtrack(0, []);
  return res;
};