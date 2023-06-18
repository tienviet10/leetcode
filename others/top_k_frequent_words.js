// * 692. Top K Frequent Words

// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Example 1:
// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

const topKFrequent = function(words, k) {
  const hashMap = {};
  const freq = new Array(words.length + 1).fill([]);
  const res = [];

  words.sort();

  for (const word of words) {
    hashMap[word] = (hashMap[word] || 0) + 1;
  }

  for (const [key, value] of Object.entries(hashMap)) {
    freq[value] = freq[value].concat([key]);
  }

  for (let i = freq.length - 1; i >= 0; i--) {
    for (const val of freq[i]) {
      res.push(val);
      if (res.length === k) return res;
    }
  }

  return "nothing";
};