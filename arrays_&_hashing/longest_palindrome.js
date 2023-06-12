// * 409. Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.


// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

const longestPalindrome = function(s) {
  const hash = {};
  let count = 0,
    isOdd = 0;

  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
    if (hash[char] % 2 === 0) {
      count++;
      isOdd--;
    } else {
      isOdd++;
    }
  }

  return isOdd > 0 ? count * 2 + 1 : count * 2;
};