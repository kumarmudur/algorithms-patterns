// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4

// time: O(N) | space: O(1)
const remove = (arr) => {
    let nextNonDuplicate = 1;
    let i = 0;

    while (i < arr.length) {
        if (arr[nextNonDuplicate - 1] !== arr[i]) {
            arr[nextNonDuplicate] = arr[i];
            nextNonDuplicate++;
        }
        i++;
    }
    return nextNonDuplicate;
};

console.log(remove([2, 3, 3, 3, 6, 9, 9]));
