
// * 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

package greedy;

class Solution {
  public String longestCommonPrefix(String[] strs) {
    // ? Method 1:
    // if (strs.length == 1) {
    // return strs[0];
    // }
    // String prefix = "";

    // for (int i = 0; i < strs[0].length(); i++) {
    // for (String str : strs) {
    // if (i > str.length() - 1 || str.length() == 0 || str.charAt(i) !=
    // strs[0].charAt(i)) {
    // return prefix;
    // }
    // }
    // prefix += strs[0].charAt(i);
    // }

    // return prefix;

    // ? Method 2:
    if (strs == null || strs.length == 0) {
      return "";
    }

    String prefix = strs[0];

    for (int i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) != 0) {
        prefix = prefix.substring(0, prefix.length() - 1);

        if (prefix.isEmpty()) {
          return "";
        }
      }
    }

    return prefix;
  }
}