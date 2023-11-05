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