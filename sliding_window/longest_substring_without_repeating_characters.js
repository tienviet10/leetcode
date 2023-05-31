// * 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest
// substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const lengthOfLongestSubstring = function(s) {
  const substringHolder = new Set();
  let l = 0,
    res = 0;

  for (let r = 0; r < s.length; r++) {
    while (substringHolder.has(s[r])) {
      substringHolder.delete(s[l]);
      l++;
    }
    substringHolder.add(s[r]);
    res = Math.max(res, r - l + 1);
  }

  return res;
};