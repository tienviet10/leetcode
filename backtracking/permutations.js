// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const permute = function(nums) {
  const result = [],
    curr = [];

  const dfs = () => {
    if (curr.length === nums.length) {
      result.push(curr.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (curr.includes(nums[i])) {
        continue;
      }

      curr.push(nums[i]);
      dfs();
      curr.pop();
    }
  };

  dfs();

  return result;
};