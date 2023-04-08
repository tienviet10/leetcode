// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

const topKFrequent = function(nums, k) {
  const count = {};
  for (const num of nums) {
    count[num] = num in count ? count[num] + 1 : 1;
  }

  const freq = new Array(nums.length + 1).fill([]);
  for (const [value, freIndex] of Object.entries(count)) {
    freq[freIndex] = freq[freIndex].concat([value]);
  }

  const res = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) return res;
    }
  }
};