/**
 * Leecode 121
 * 要求
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 

1 <= prices.length <= 105
0 <= prices[i] <= 104

思路:
动态规划，二维数组
 */

export function maxProfit(prices: number[]): number {
    const dp: number[][] = new Array(prices.length).fill(0).map(item => new Array(2)) //创建二维数组,dp[i][0]表示i天持有股票的最大现金,dp[i][1]表示第i天不持有股票的最大现金
    dp[0] = [-prices[0], 0]
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
        dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1])
    }
    return dp[prices.length - 1][1]
};