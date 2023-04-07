// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


const groupAnagrams = function(strs) {
  let result = {};

  for (const str of strs) {
    const signature = new Array(26).fill(0);
    for (const character of str) {
      signature[character.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    if (signature in result) {
      result[signature].push(str);
    } else {
      result[signature] = [str];
    }
  }
  return Object.values(result);
};