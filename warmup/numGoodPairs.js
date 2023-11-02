

// time: O(N) | space: O(N) 
const numGoodPairs = (nums) => {
    let pairCount = 0;
    let map = {};

    for (let n of nums) {
        map[n] = (map[n] || 0) + 1;

        pairCount += map[n] - 1;
    }
    return pairCount;
}