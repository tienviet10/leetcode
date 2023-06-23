// * 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Exampple 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution {
  public boolean isAnagram(String s, String t) {
    // ? Method 1:
    // if (s.length() != t.length()) {
    // return false;
    // }

    // char[] sChars = s.toCharArray();
    // char[] tChars = t.toCharArray();

    // Arrays.sort(sChars);
    // Arrays.sort(tChars);

    // return Arrays.equals(sChars, tChars);

    // ? Method 2:
    if (s.length() != t.length()) {
      return false;
    }

    Map<Integer, Integer> map = new HashMap<Integer, Integer>();

    for (int i = 0; i < s.length(); i++) {
      int sChar = s.charAt(i);
      int tChar = t.charAt(i);

      map.put(sChar, map.getOrDefault(sChar, 0) + 1);
      map.put(tChar, map.getOrDefault(tChar, 0) - 1);

      if (map.containsKey(sChar) && map.get(sChar) == 0) {
        map.remove(sChar);
      }
      if (map.containsKey(tChar) && map.get(tChar) == 0) {
        map.remove(tChar);
      }
    }

    return map.isEmpty();
  }
}