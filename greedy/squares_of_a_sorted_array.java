// * 977. Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

package greedy;
public class squares_of_a_sorted_array {
    public int[] sortedSquares(int[] nums) {
        int l = 0;
        int r = nums.length - 1;
        int[] res = new int[nums.length];

        for (int i = 0; i < nums.length; i++) {
            if (Math.abs(nums[l]) > Math.abs(nums[r])) {
                res[nums.length - 1 - i] = nums[l] * nums[l];
                l++;
            } else {
                res[nums.length - 1 - i] = nums[r] * nums[r];
                r--;
            }
        }
        return res;
    }
}
