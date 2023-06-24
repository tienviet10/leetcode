// * 844. Backspace String Compare

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

package two_pointers;

class Solution {
  public boolean backspaceCompare(String s, String t) {
    int sRight = s.length() - 1;
    int tRight = t.length() - 1;
    int sSkip = 0;
    int tSkip = 0;

    while (sRight >= 0 || tRight >= 0) {
      while (sRight >= 0) {
        if (s.charAt(sRight) == '#') {
          sSkip++;
          sRight--;
        } else if (sSkip > 0) {
          sSkip--;
          sRight--;
        } else {
          break;
        }
      }

      while (tRight >= 0) {
        if (t.charAt(tRight) == '#') {
          tSkip++;
          tRight--;
        } else if (tSkip > 0) {
          tSkip--;
          tRight--;
        } else {
          break;
        }
      }

      if (sRight >= 0 && tRight >= 0 && s.charAt(sRight) != t.charAt(tRight)) {
        return false;
      }

      if ((sRight >= 0) != (tRight >= 0)) {
        return false;
      }

      sRight--;
      tRight--;
    }

    return true;
  }
}