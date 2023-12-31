// Given an array, find the average of all  subarrays of ‘K’ contiguous elements in it.
// Input: Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

// Solution 1
// time: O(n * k) | space: O(n)
function findAveragesOfSubArrays(k, arr) {
    const results = [];
    for (let i = 0; i < arr.length - k + 1; i++) {
        // find sum of next k elements
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }
        results.push(sum / k);
    }
    return results;
}

// Solution 2
// time: O(n) | space: O(n)
function findAveragesOfSubArrays1(k, arr) {
    const results = [];
    let windowSum = 0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if (windowEnd >= k - 1) {
            results.push(windowSum / k);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return results;
}

console.log(findAveragesOfSubArrays1(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));