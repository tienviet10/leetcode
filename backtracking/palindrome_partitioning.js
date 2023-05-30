// 131. Palindrome Partitioning

// Given a string s, partition s such that every
// substring of the partition is a palindrome.
// Return all possible palindrome partitioning of s.


// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

const partition = function(s) {
  const result = [],
    curr = [];

  const isPalindrome = (str) => {
    let l = 0,
      r = str.length - 1;

    while (l < r) {
      if (str[l] !== str[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  };

  const dfs = (i) => {
    if (i === s.length) {
      result.push(curr.slice());
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s.slice(i, j + 1))) {
        curr.push(s.slice(i, j + 1));
        dfs(j + 1);
        curr.pop();
      }
    }
  };

  dfs(0, []);
  return result;
};