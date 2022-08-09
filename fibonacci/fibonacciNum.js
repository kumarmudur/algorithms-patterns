// Fibonacci number pattern

// Mathematically define fibonacci numbers
// Fib(n) = Fib(n-1) + Fib(n-2), for n > 1

// Solution 1: Recursion time: O(2^n) | space: O(n)
const calculateFibonacci = (n) => {
    console.log('fib called', n);
    if (n < 2) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

// Solution 2: Top-down dynamic programming with memoization 
const calculateFibonacci1 = (n) => {
    const memoize = [];

    function fib(n) {
        if (n < 2) return n;

        // If have already solved this subprogram, simply return the result from the cache 
        if (memoize[n]) return memoize[n];

        memoize[n] = fib(n-1) + fib(n-2);
        return memoize[n];
    }

    return fib(n);
}

// Solution 3: Bottom-up dynamic programming 
// time: O(n) | space O(n)
const calculateFibonacci2 = (n) => {
    if (n < 2) return n;
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

console.log(calculateFibonacci(10));
