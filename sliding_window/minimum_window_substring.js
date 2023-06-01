// * 76. Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.


const minWindow = function(s, t) {
  if (t.length === "") return '';

  const countT = {},
    window = {};

  for (let char of t) {
    countT[char] = (countT[char] || 0) + 1;
  }

  let have = 0,
    need = Object.keys(countT).length,
    res = [-1, -1],
    resLen = Infinity,
    l = 0;

  for (let r = 0; r < s.length; r++) {
    const char = s[r];
    window[char] = (window[char] || 0) + 1;

    if (char in countT && countT[char] >= window[char]) have++;

    while (have === need) {
      if (r - l + 1 < resLen) {
        resLen = r - l + 1;
        res = [l, r];
      }

      window[s[l]]--;
      if (s[l] in countT && countT[s[l]] > window[s[l]]) have--;
      l++;
    }
  }
};