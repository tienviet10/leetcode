// * 215. Kth Largest Element in an Array

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

package heap_priority_queue;

import java.util.PriorityQueue;

class Solution {
  public int findKthLargest(int[] nums, int k) {
    // ? Method 1:
    // PriorityQueue<Integer> minHeap = new PriorityQueue<>();

    // for (int num : nums) {
    // minHeap.add(num);

    // if (minHeap.size() > k) {
    // minHeap.remove();
    // }
    // }

    // return minHeap.remove();

    // ? Method 2:
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();

    for (int i = 0; i < k; i++) {
      minHeap.offer(nums[i]); // same as .add()
    }

    for (int i = k; i < nums.length; i++) {
      if (nums[i] > minHeap.peek()) {
        minHeap.poll(); // same as remove() but remove() throws exception if queue is empty
        minHeap.offer(nums[i]);
      }
    }

    return minHeap.peek();
  }
}
