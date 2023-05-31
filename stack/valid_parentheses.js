// * 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

const isValid = function(s) {
  const validPar = {
    ")": "(",
    "}": "{",
    ']': "["
  };
  let stack = [];

  for (const c of s) {
    if (!(c in validPar)) {
      stack.push(c);
    } else {
      const popPar = stack.pop();
      if (popPar !== validPar[c]) {
        return false;
      }
    }
  }

  return stack.length === 0 ? true : false;
};