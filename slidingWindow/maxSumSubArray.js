// Input: [2, 1, 5, 1, 3, 2], k=3  => output => 9

// time: O(N * K) | space: O(1)
function maxSubArrayOfSize(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < arr.length - k + 1; i++) {
        windowSum = 0;
        for (let j = i; j < i + k; j++) {
            windowSum += arr[j];
        }
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

maxSubArrayOfSize([2, 1, 5, 1, 3, 2], 3);
