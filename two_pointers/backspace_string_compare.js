// * 844. Backspace String Compare

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

const backspaceCompare = function(s, t) {
  let firstPointer = s.length - 1,
    secondPointer = t.length - 1,
    firstSkip = 0,
    secondSkip = 0;

  while (firstPointer >= 0 || secondPointer >= 0) {
    while (firstPointer >= 0) {
      if (s[firstPointer] === '#') {
        firstPointer--;
        firstSkip++;
      } else if (firstSkip > 0) {
        firstPointer--;
        firstSkip--;
      } else {
        break;
      }
    }

    while (secondPointer >= 0) {
      if (t[secondPointer] === '#') {
        secondPointer--;
        secondSkip++;
      } else if (secondSkip > 0) {
        secondPointer--;
        secondSkip--;
      } else {
        break;
      }
    }

    if (s[firstPointer] !== t[secondPointer]) {
      return false;
    }

    firstPointer--;
    secondPointer--;
  }

  return true;
};