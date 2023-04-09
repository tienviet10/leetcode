// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const isPalindrome = function(s) {
  const realChar = /[0-9a-zA-Z]/;
  let l = 0,
    r = s.length - 1;

  while (l <= r) {
    if (!realChar.test(s.charAt(l))) {
      l++;
    } else if (!realChar.test(s.charAt(r))) {
      r--;
    } else if (s.charAt(l).toLowerCase() === s.charAt(r).toLowerCase()) {
      l++;
      r--;
    } else {
      return false;
    }
  }

  return true;
};