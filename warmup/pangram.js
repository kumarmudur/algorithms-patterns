// Input: sentence = "TheQuickBrownFoxJumpsOverTheLazyDog"
// Output: true
// Explanation: The sentence contains at least one occurrence of every letter of the English alphabet either in lower or upper case.

// time: O(N) | space: O(1)
const checkIfPangram = sentence => {
    let set = new Set();

    for (const char of sentence.toLowerCase()) {
        if (currChar.match(/[a-z]/i)) { // If it an alphabet
            set.add(char);
        }
    }
    return set.size === 26;
};