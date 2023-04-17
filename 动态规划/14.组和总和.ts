/**
 * Leecode 377
 * 要求 
 * 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

题目数据保证答案符合 32 位整数范围。

1 <= nums.length <= 200
1 <= nums[i] <= 1000
nums 中的所有元素 互不相同
1 <= target <= 1000

思路:完全背包求排列问题
 */


// => 求组合,遍历顺序先物品后背包
export function combinationSum4(nums: number[], target: number): number {
    const dp: number[] = new Array(target + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums[i]; j <= target; j++) {
            dp[j] += dp[j - nums[i]]
        }
    }
    return dp[target]
};


// => 求排列,遍历顺序先背包后物品
export function combinationSum41(nums: number[], target: number): number {
    const dp: number[] = new Array(target + 1).fill(0)
    dp[0] = 1
    for (let j = 0; j <= target; j++) {
        for (let i = 0; i < nums.length; i++) {
            j >= nums[i] && (dp[j] += dp[j - nums[i]])
        }
    }
    return dp[target]
};