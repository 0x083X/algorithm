/**
 * Leecode 746
 * 要求
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

请你计算并返回达到楼梯顶部的最低花费

2 <= cost.length <= 1000
0 <= cost[i] <= 999

思路:
简单dp
 */

export function minCostClimbingStairs(cost: number[]): number {
    const N: number = cost.length
    //dp数组记录到第i个台阶花费的最少的钱
    const dp: number[] = new Array(N).fill(0)
    //dp数组初始化，可以不初始化，因为定义dp的时候已经初始化为0了
    dp[0] = 0
    dp[1] = 0
    for (let i = 2; i < N; i++) { //递推顺序，从前向后
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])  //递推公式,当前台阶的最小值是 前一个台阶的值和前两个台阶的值中的最小值
    }
    console.log(dp) //打印dp
    return Math.min(dp[N - 1] + cost[N - 1], dp[N - 2] + cost[N - 2]) //最后的最小值是最后一个元素花钱走和 倒数第二个元素花钱走中的最小值
};