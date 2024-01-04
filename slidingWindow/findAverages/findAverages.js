// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5, output = [2.2, 2.8, 2.4, 3.6, 2.8]

// time: O(N ^ K) | space: O(N)
const findAverages = (arr, k) => {
    const result = [];

    for (let i = 0; i < arr.length - k + 1; i++) {
        let sum = 0;
        for (let j = 0; j < i + k; j++) {
            sum += arr[j];
        }
        result.push(sum / k); // calculate average
    }
    return result;
}

// time: O(N) | space: O(N)
const findAverages1 = (arr, k) => {
    const result = [];
    let windowSum = 0, windowStart = 0;
    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i];
        if (i >= k - 1) {
            result.push(windowSum / k);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return result;
}
