// Topic: String

// time: O(2^n) | space: O(n)
const findLPSLength = (str) => {

    function findLPSLengthRecursive(str, start, end) {
        if (start > end) return 0;

        if (start === end) return 1;

        // case 1: elements at the beginning and end are the same
        if (str[start] === str[end]) {
            return 2 + findLPSLengthRecursive(str, start + 1, end - 1);
        }

        // case 2: skip one element from the beginning or end
        let c1 = findLPSLengthRecursive(str, start + 1, end);
        let c2 = findLPSLengthRecursive(str, start, end - 1);
        return Math.max(c1, c2);
    }

    return findLPSLengthRecursive(str, 0, str.length - 1);
}