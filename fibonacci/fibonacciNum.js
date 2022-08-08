// Fibonacci number pattern

// Mathematically define fibonacci numbers
// Fib(n) = Fib(n-1) + Fib(n-2), for n > 1

// Solution 1: Recursion
const calculateFibonacci = (n) => {
    if (n < 2) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

console.log(calculateFibonacci(10));
