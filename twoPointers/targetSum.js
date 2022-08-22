// time: O(n) | space O(1)

function pair_with_target_sum(arr, targetSum) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === targetSum) {
            return [left, right];
        } else if (currentSum < targetSum) {
            left++;
        } else {
            right++;
        }
    }
    return [-1, -1];
}