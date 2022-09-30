
// time: O(n) | space: O(n)
function squareSortedArray(arr) {
   const n = arr.length;
   squares = Array(n).fill(0);
   let highestSquareIdx = n - 1;
   let left = 0, right = n -1;

   while (left < right) {
    let leftSquare = arr[left] * arr[left];
    let rightSquare = arr[right] * arr[right];
    if (leftSquare > rightSquare) {
        squares[highestSquareIdx] = leftSquare;
        left++;
    } else {
        squares[highestSquareIdx] = rightSquare;
        right--;
    }
    highestSquareIdx--;
   }
   return squares;;
}

squareSortedArray([ 4, 1, 0, 4, 9]);