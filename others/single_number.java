//* 136. Single Number
//* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//* You must implement a solution with a linear runtime complexity and use only constant extra space.

//* Example 1:
//* Input: nums = [2,2,1]
//* Output: 1
package others;

import java.util.HashSet;
import java.util.Set;

public class single_number {
    public int singleNumber(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            if (set.contains(num)) {
                set.remove(num);
            } else {
                set.add(num);
            }
        }
        return set.stream().findFirst().get();
    }
}
