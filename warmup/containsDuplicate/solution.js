// Input: nums= [1, 2, 3, 4]
// Output: false 

// Input: nums= [1, 2, 3, 1]
// Output: true  

// Solution 1:
// time: O(N^) | space: O(1)
const containsDuplicate = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
}

// Solution 2: Hash Set
// time: O(N) | space: O(N)
const containsDuplicate1 = (nums) => {
    const set = new Set();
    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false;
}