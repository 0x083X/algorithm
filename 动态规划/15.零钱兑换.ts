/**
 * Leecode 322
 * 要求
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104

思路 
完全背包问题，dp数组表示的是0-i个不同coins中获取amount所用的最少的coins数。
 */

export function coinChange(coins: number[], amount: number): number {
    const dp: number[] = new Array(amount + 1).fill(Infinity)
    dp[0] = 0 //不可以用二维数组，二维数组的i和i-1存在关系，本题的i和i-1不存在关系
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
        }
    }
    return dp[amount] == Infinity ? -1 : dp[amount]
};