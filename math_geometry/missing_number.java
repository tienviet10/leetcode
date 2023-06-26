//* 268. Missing Number

//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
//Input: nums = [3,0,1]
//        Output: 2
//        Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

package math_geometry;

public class missing_number {
    public int missingNumber(int[] nums) {
        int sum = 0;

        for ( int i = 0; i < nums.length; i++) {
            sum += (nums[i] - (i + 1));
        }

        return -sum;
    }
}
