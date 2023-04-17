/**
 * Leecode 343
 * 思路:
 * 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

返回 你可以获得的最大乘积 。

思路:
主要找出递归公式就行了
 */
export function integerBreak(n: number): number {
    const dp: number[] = []
    dp[0] = 0
    dp[1] = 0
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i - 1; j++) {
            dp[i] = Math.max(dp[i] == undefined ? 0 : dp[i], j * (i - j), j * dp[i - j])
        }
    }
    return dp[n]
};