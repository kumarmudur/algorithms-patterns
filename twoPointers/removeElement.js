// Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
// Output: 4

// Input: [2, 11, 2, 2, 1], Key=2
// Output: 2

// time: O(n) | space: O(1)
const removeElement = (arr, key) => {
    let nextElement = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== key) {
            arr[nextElement] = arr[i];
            nextElement++;
        }
    }
    return nextElement;
}