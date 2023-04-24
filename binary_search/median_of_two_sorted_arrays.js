// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

const findMedianSortedArrays = function(nums1, nums2) {
  let shortArr = nums1,
    longArr = nums2,
    total = nums1.length + nums2.length,
    half = Math.floor(total / 2);

  if (shortArr.length > longArr.length) {
    longArr = nums1;
    shortArr = nums2;
  }

  let l = 0,
    r = shortArr.length - 1;

  while (true) {
    let midShort = Math.floor((l + r) / 2),
      midLong = half - midShort - 2;

    let shortLeft = midShort >= 0 ? shortArr[midShort] : -Infinity,
      shortRight = midShort + 1 < shortArr.length ? shortArr[midShort + 1] : Infinity,
      longLeft = midLong >= 0 ? longArr[midLong] : -Infinity,
      longRight = midLong + 1 < longArr.length ? longArr[midLong + 1] : Infinity;

    if (shortLeft <= longRight && longLeft <= shortRight) {
      if (total % 2) {
        return Math.min(shortRight, longRight);
      }
      return (Math.max(shortLeft, longLeft) + Math.min(shortRight, longRight)) / 2;
    } else if (shortLeft > longRight) {
      r = midShort - 1;
    } else {
      l = midShort + 1;
    }
  }

};