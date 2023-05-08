// 567. Permutation in String

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

const checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;

  const count1 = new Array(26).fill(0),
    count2 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    count1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    count2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    matches += (count1[i] === count2[i] ? 1 : 0);
  }

  let l = 0;
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) return true;

    let index = s2[r].charCodeAt(0) - 'a'.charCodeAt(0);
    count2[index] += 1;
    if (count1[index] === count2[index]) {
      matches += 1;
    } else if (count1[index] + 1 === count2[index]) {
      matches -= 1;
    }

    index = s2[l].charCodeAt(0) - 'a'.charCodeAt(0);
    count2[index] -= 1;
    if (count1[index] === count2[index]) {
      matches += 1;
    } else if (count1[index] - 1 === count2[index]) {
      matches -= 1;
    }

    l += 1;
  }
  return matches === 26;
};