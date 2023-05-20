// 226. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

// Examample 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

const invertTree = function(root) {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};