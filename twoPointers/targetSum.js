// Solution 1
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

// Solution 2
// Hash Table
// time: O(n) | space O(n)
function pair_with_target_sum(arr, targetSum) {
    const results = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (targetSum - num in results) {
            return [results[targetSum - num], i];
        }
        results[arr[i]] = i;
    }
    return [ -1, -1];
}

