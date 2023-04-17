/**
 * Leecode 198
 * 要求
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

1 <= nums.length <= 100
0 <= nums[i] <= 400

思路:
dp,不是背包问题。dp[i]表示到0-i个房间最多能偷多少价值的东西。dp[i] = Math.max(dp[i-2]+nums[i-2], dp[i-1])
 */

export function rob(nums: number[]): number {
    const dp: number[] = new Array(nums.length + 1).fill(0)
    dp[1] = nums[0]
    dp[2] = Math.max(nums[0], nums[1])
    for (let i = 3; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i-1], dp[i - 1])
    }
    return dp[nums.length]
};