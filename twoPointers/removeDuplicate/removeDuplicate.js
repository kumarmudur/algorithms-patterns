

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


removeDuplicates([2, 3, 3, 3, 6, 9, 9]);