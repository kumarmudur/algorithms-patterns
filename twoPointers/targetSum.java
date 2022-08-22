package twoPointers;

import java.util.HashMap;

// time: O(n) | space: O(1) 
class PairWithTargetSum {
    public static int[] search(int[] arr, int targetSum) {
        int left = 0, right = arr.length - 1;

        while (left < right) {
            int currentSum = arr[left] + arr[right];
            if (currentSum == targetSum) {
                return new int[] { left, right };
            }
            if (currentSum < targetSum)
                left++;
            else
                right--;
        }
        return new int[] { -1, -1 };
    }
};

// Solution 2
// Hash Table
// time: O(n) | space: O(n)
class PairWithTargetSumOne {
    public static int[] search(int[] arr, int targetSum) {
        HashMap<Integer, Integer> results = new HashMap<>();

        for (int i = 0; i < arr.length; i++) {
            if (results.containsKey(targetSum - arr[i]))
                return new int[] { results.get(targetSum - arr[i]), i };
            else
                results.put(arr[i], i);
        }
        return new int[] { -1, -1 };
    }
};