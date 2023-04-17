/**
 * Leecode 518
 * 要求
 * 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。

请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。

假设每一种面额的硬币有无限个。 

题目数据保证结果符合 32 位带符号整数。

1 <= coins.length <= 300
1 <= coins[i] <= 5000
coins 中的所有值 互不相同
0 <= amount <= 5000

思路:完全背包,dp[j]表示背包容量为j的情况下最大的组合数
 */
export function change(amount: number, coins: number[]): number {
    const dp:number[] = new Array(amount+1).fill(0)
    dp[0] = 1
    for(let i = 0; i < coins.length; i++) {
        for(let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j-coins[i]]
            console.log(dp[j])
        }
    }
    return dp[amount]
};