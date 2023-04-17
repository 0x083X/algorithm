/**
 * Leecode 122
 * 要求
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

    在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

    返回 你能获得的 最大 利润 。

    1 <= prices.length <= 3 * 104
    0 <= prices[i] <= 104   

    思路:
    贪心 : 极小值购入，极大值卖出(或者只要后一个数比前一个数大就相加，也就是只要碰到上坡就加)
 */
//极小值购入，极大值卖出
export function maxProfit(prices: number[]): number {
    let ans: number = 0 //初始化为0，利润最低为0
    let buy: number = prices[0] //购入价格
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) { //如果是升价
            while (i + 1 < prices.length && prices[i] < prices[i + 1]) //找极大值(极大值不考虑右边)
                i++ //让i一直涨
            ans += prices[i] - buy //找到利润
        }
        else { //如果是降价
            buy = prices[i] //更新购买的股票价格
        }
    }
    return ans
};

//上坡就加
export function maxProfit1(prices: number[]): number {
    let ans: number = 0 //初始化为0，利润最低为0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[i - 1] > 0)
            ans += prices[i] - prices[i - 1]
    }
    return ans
};