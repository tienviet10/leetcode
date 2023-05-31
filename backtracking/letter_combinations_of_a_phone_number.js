// * 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

const letterCombinations = function(digits) {
  const result = [];

  const numberToLetters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const recursion = (i, curr) => {
    if (i === digits.length && curr.length > 0) {
      result.push(curr.join(''));
      return;
    }

    for (const letter of numberToLetters[digits[i]]) {
      recursion(i + 1, curr.concat(letter));
    }
  };

  if (digits.length > 0) {
    recursion(0, []);
  }

  return result;
};
