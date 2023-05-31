// * 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

const generateParenthesis = function(n) {
  let stack = [],
    res = [];

  const runStack = (openP, closeP) => {
    if (openP === closeP && closeP === n) {
      res.push(stack.join(""));
      return;
    }

    if (openP < n) {
      stack.push("(");
      runStack(openP + 1, closeP);
      stack.pop();
    }

    if (closeP < openP) {
      stack.push(")");
      runStack(openP, closeP + 1);
      stack.pop();
    }
  };

  runStack(0, 0);
  return res;
};