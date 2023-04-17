/**
 * Leecode 70
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

1 <= n <= 45

思路：
简单dp
 */

export function climbStairs(n: number): number {
    //dp数组代表n阶楼梯有几种不同的方法
    const dp: number[] = new Array(n + 1)
    //初始化
    dp[1] = 1 //一阶 只有一种
    dp[2] = 2//二阶有两种
    for (let i = 3; i <= n; i++) { //递推顺序从后往前
        dp[i] = dp[i - 1] + dp[i - 2] //递推公式(dp[i]只有两种情况dp[i-1]走1步,dp[i-2]走两步)
    }
    return dp[n] //打印dp
};