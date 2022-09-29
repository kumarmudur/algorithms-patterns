// Input: [2, 1, 5, 1, 3, 2], k=3  => output => 9

// Solution 1
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

// Solution 2
// time: O(N) | space: O(1)
function maxSubArrayOfSize1(arr, k) {
    let maxSum = 0, windowSum = 0, windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        if (windowEnd >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return maxSum;
}

maxSubArrayOfSize1([2, 1, 5, 1, 3, 2], 3);
