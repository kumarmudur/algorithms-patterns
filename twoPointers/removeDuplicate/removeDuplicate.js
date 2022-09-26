

// Solution 1
// time: O(N) | space: O(1)
function removeDuplicates(arr) {
    let nonDuplicates = 1;
    let  i = 0;

    while (i < arr.length) {
        if (arr[nonDuplicates - 1] != arr[i]) {
            arr[nonDuplicates++] = arr[i];
        }
        i++;
    }
    return nonDuplicates;
}

// Solution 2
// time: O(N) | space: O(1)
function removeElement(arr, key) {
    let element = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== key) {
            arr[element++] = arr[i];
        }
    }
    return element;
}

removeDuplicates([2, 3, 3, 3, 6, 9, 9]);