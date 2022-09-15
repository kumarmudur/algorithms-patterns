package fibonacci.stairCase;

// time: O(3^n) | space: O(n)
public class StairCase {
    public int CountWays(int n) {
        if (n == 0)
            return 1;
        if (n == 1)
            return 1;
        if (n == 2)
            return 2;

        int take1Step = CountWays(n - 1);
        int take2Step = CountWays(n - 2);
        int take3Step = CountWays(n - 3);

        return take1Step + take2Step + take3Step;
    }

    public static void main(String[] args) {
        StairCase sc = new StairCase();
        System.out.println(sc.CountWays(5));
    }
}

// Top-down Dynamic Programming with Memoization
// time: O(n) | space: O(n)
class StairCase1 {
    public int Countways(int n) {
        int dp[] = new int[n + 1];
        return CountWaysRecursive(dp, n);
    }

    public int CountWaysRecursive(int[] dp, int n) {
        if (n == 0)
            return 1;
        if (n == 1)
            return 1;
        if (n == 2)
            return 2;

        if (dp[n] == 0) {
            int take1Step = CountWaysRecursive(dp, n - 1);
            int take2Step = CountWaysRecursive(dp, n - 2);
            int take3Step = CountWaysRecursive(dp, n - 3);

            dp[n] = take1Step + take2Step + take3Step;
        }
        return dp[n];
    }
}

// Bottom-up Dynamic Programming
// time: O(n) | space: O(n)
class StairCase2 {
    public int CountWays(int n) {
        if (n < 2)
            return 1;
        if (n == 2)
            return 2;

        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 1;
        dp[2] = 2;

        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i + 1] + dp[i + 2] + dp[i + 3];
        }
        return dp[n];
    }
}