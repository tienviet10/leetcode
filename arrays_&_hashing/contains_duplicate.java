// * 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class Solution {
  public boolean containsDuplicate(int[] nums) {
    // ? Method 1:
    // Map<Integer, Integer> map = new HashMap<Integer, Integer>();

    // for (int i = 0; i < nums.length; i++) {
    // if (map.containsKey(nums[i])) {
    // return true;
    // }
    // map.put(nums[i], 1);
    // }

    // return false;

    // ? Method 2:
    Set<Integer> set = new HashSet<Integer>();

    for (int num : nums) {
      if (set.contains(num)) {
        return true;
      }
      set.add(num);
    }

    return false;
  }
}