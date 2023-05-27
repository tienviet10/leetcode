// 40. Combination Sum II

// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

const combinationSum2 = function(candidates, target) {
  const res = [];
  candidates.sort();
  const backtrack = (i, curr, sum) => {
    if (sum === target) {
      res.push(curr.slice());
      return;
    }

    if (sum > target || i >= candidates.length) return;

    curr.push(candidates[i]);
    backtrack(i + 1, curr, sum + candidates[i]);

    curr.pop();
    while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
      i += 1;
    }
    backtrack(i + 1, curr, sum);
  };

  backtrack(0, [], 0);

  return res;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));