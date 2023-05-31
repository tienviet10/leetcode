// * 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

const trap = function(height) {
  let lIndex = 0,
    rIndex = height.length - 1,
    maxL = height[lIndex],
    maxR = height[rIndex],
    res = 0;

  while (lIndex < rIndex) {
    if (maxL <= maxR) {
      lIndex++;
      maxL = Math.max(height[lIndex], maxL);
      res += (maxL - height[lIndex]);
    } else {
      rIndex--;
      maxR = Math.max(height[rIndex], maxR);
      res += (maxR - height[rIndex]);
    }
  }
  return res;
};