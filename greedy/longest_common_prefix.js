// * 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

const longestCommonPrefix = function(strs) {
  let res = '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return res;
      }
    }
    res += strs[0][i];
  }

  return res;
};