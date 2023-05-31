// * 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

const longestConsecutive = function(nums) {
  const uniqueSet = new Set(nums);
  let result = 0;

  for (const num of nums) {
    if (!uniqueSet.has(num - 1)) {
      let tempRes = 1;
      let nextNumber = num + 1;
      while (uniqueSet.has(nextNumber)) {
        nextNumber++;
        tempRes++;
      }
      if (tempRes > result) {
        result = tempRes;
      }
    }
  }

  return result;
};