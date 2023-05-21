// 78. Subsets
// Given an integer array nums of unique elements, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

const subsets = function(nums) {
  const curr = [],
    result = [];

  const dfs = (index) => {
    if (index >= nums.length) {
      result.push(curr.slice());
      return;
    }

    curr.push(nums[index]);
    dfs(index + 1);
    curr.pop();
    dfs(index + 1);
  };

  dfs(0);

  return result;
};