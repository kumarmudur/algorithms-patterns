// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]

// Input: [2, 5, 9, 11], target=11
// Output: [0, 2]

// Solution 1
// time: O(N^2) | space: O(1)
const searchTarget = (arr, targetSum) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

// Solution 2
// time: O(N) | space: O(1)
const searchTarget1 = (arr, targetSum) => {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === targetSum) {
            return [left,   right];
        }
        if (targetSum > currentSum) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return [-1, -1];
}

// Solution 3
// time: O(N) | space: O(1)
const searchTarget2 = (arr, targetSum) => {
    const nums = {};
    for (let i = 0; i < arr.length; i++) {
        const num = nums[i];
        if (targetSum - num in nums) {
            return [nums[targetSum - num], i];
        }
        nums[num] = i;
    }
    return [-1, -1];
}
