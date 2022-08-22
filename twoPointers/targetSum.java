package twoPointers;

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