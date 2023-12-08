// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]

// Input: [-3, -1, 0, 1, 2]
// Output: [0, 1, 1, 4, 9]

// time: O(N) | space: O(N)
const makeSquare = (arr) => {
    const n = arr.length;
    let squares = Array(n).fill(0);
    let highestSquareIdx = n - 1;
    let left = 0, right = n - 1;

    while (left <= right) {
        let leftSquare = arr[left] * arr[left];
        let rightSquare = arr[right] * arr[right];
        if (leftSquare > rightSquare) {
            squares[highestSquareIdx] = leftSquare;
            left++;
        } else {
            squares[highestSquareIdx] = rightSquare;
            right--;
        }
        highestSquareIdx -= 1;
    }
    return squares;
}