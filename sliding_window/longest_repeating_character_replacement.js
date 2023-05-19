// 424. Longest Repeating Character Replacement

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.


// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

const characterReplacement = function(s, k) {
  const count = {};
  let res = 0,
    l = 0,
    maxf = 0;

  for (let r = 0; r < s.length; r++) {
    count[s[r]] = (s[r] in count) ? count[s[r]] + 1 : 1;
    maxf = Math.max(maxf, count[s[r]]);

    while (r - l + 1 - maxf > k) {
      count[s[l]] -= 1;
      l += 1;
    }

    res = Math.max(res, r - l + 1);
  }

  return res;
};