// * 5. Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

const longestPalindrome = function(s) {
  let res = '',
    resLen = 0;

  const expandFromTheMiddle = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        res = s.slice(l, r + 1);
        resLen = r - l + 1;
      }
      l--;
      r++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandFromTheMiddle(i, i);
    expandFromTheMiddle(i, i + 1);
  }

  return res;
};