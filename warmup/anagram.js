// Anagram example

// time: O(N) | space: O(1)
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    let freqMap = {};
    for (let i = 0; i < s.length; i++) {
        freqMap[s[i]] = (freqMap[s[i]] || 0) + 1;
        freqMap[t[i]] = (freqMap[t[i]] || 0) + 1;
    }

    for (let char in freqMap) {
        if (freqMap[char] !== 0) return false;
    }
    return true;
};