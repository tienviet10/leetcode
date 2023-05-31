// * 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Exampple 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

const isAnagram = function(s, t) {
  let result = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] in result) {
      result[s[i]]++;
    } else {
      result[s[i]] = 1;
    }

    if (t[i] in result) {
      result[t[i]]--;
    } else {
      result[t[i]] = -1;
    }

    if (result[s[i]] === 0) {
      delete result[s[i]];
    }

    if (result[t[i]] === 0) {
      delete result[t[i]];
    }
  }

  return Object.keys(result).length > 0 ? false : true;
};