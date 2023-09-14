// Input: s= "hello"
// Output: "holle"

// Input: s= "AEIOU"
// Output: "UOIEA"

// time: O(n) | space: O(n) 
const reverseVowels = (s) => {
    let vowels = 'aeiouAEIOU';
    let first = 0;
    let last = s.length - 1;
    let array = s.split('');

    while (first < last) {
        while (first < last && vowels.indexOf(array[first]) === -1) first++;

        while (first < last && vowels.indexOf(array[last]) === -1) last++;

        [array[first], array[last]] = [array[last], array[first]];
        first++;
        last--;
    }

    return array.join('');
};