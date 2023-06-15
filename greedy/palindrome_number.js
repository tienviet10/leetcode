// * 9. Palindrome Number

// Given an integer x, return true if x is a 
// palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

const isPalindrome = function(x) {
  if (x < 0) return false;

  let div = 1;
  while (div * 10 < x) {
    div *= 10;
  }

  while (x) {
    let left = Math.floor(x / div),
      right = x % 10;

    if (left !== right) return false;
    x = Math.floor((x % div) / 10);
    div /= 100;
  }

  return true;
};