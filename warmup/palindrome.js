// Input: sentence = "A man, a plan, a canal, Panama!"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: sentence = "Was it a car or a cat I saw?"
// Output: true
// Explanation: Explanation: "wasitacaroracatisaw" is a palindrome.

// time: O(n) | space: O(1)
const isPalindrome = (s) => {
    let i = 0, j = s.length - 1;
    while (i < j) {
        while (i < j && !s[i].match(/^[a-z0-9]+$/i)) i++;
        while (i < j && !s[j].match(/^[a-z0-9]+$/i)) j--;
        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        i++;
        j--;
    }
    return true;
}