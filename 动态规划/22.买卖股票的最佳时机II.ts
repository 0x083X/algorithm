/**
 * Leecode 122
 * 要求
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

返回 你能获得的 最大 利润 。

1 <= prices.length <= 3 * 104
0 <= prices[i] <= 104

思路:
和I一样用二维dp数组,dp[i][0]表示第i天持有股票的最大价格，dp[i][1]表示第i天不持有股票的最大价格
 */
export function maxProfit(prices: number[]): number {
    const dp: number[][] = new Array(prices.length).fill(0).map(item => new Array(2).fill(0))
    dp[0] = [-prices[0], 0]
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }
    return dp[prices.length - 1][1]
};