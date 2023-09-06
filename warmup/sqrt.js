
// time: O(logN) | space: O(1)
const mySqrt = function(x) {
    if (x < 2) return x;

    let left = 2;
    let right = Math.floor(x / 2);
    let pivot;
    let num;
    while (left < right) {
        pivot = Math.floor(left + (right - left) / 2); // find the middle element
        num = pivot * pivot;
        if (num > x) right = pivot - 1; // if pivot * pivot is greater than x, set right to pivot - 1
        else if (num < x) left = pivot + 1; // if pivot * pivot is less than x, set left to pivot + 1
        else return pivot; //
    }
    return right;
}
