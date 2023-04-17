/**
 * Leecode 279 
 * 要求
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

1 <= n <= 104

思路
完全背包,dp代表0-i个完全平方数中任取填充满容量为n的背包所需最少的完全平方数
 */

export function numSquares(n: number): number {
    const dp: number[] = new Array(n + 1).fill(Infinity)
    const nums: number[] = []
    let i: number = 1
    while (1) {
        if (i ** 2 > n) break
        i ** 2 <= n && nums.push(i ** 2)
        i++
    }
    dp[0] = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums[i]; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - nums[i]] + 1)
        }
    }
    return dp[n]
};