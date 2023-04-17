/**
 * Leecode 494
 * 要求
 * 给你一个整数数组 nums 和一个整数 target 。

向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目

1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000

思路：
nums.length <= 20 ， 数值比较小，可以使用回溯.
动态规划法 将数组分成left和right部分, left - right = target , left + right = sum 
可以不断推导    right = left - target , left + (left - target) = sum    <==============>  left = (target + sum) / 2 
题意可以被抽象成在 nums数组中找出和为left的组合,转换成 nums中 0-i下标有几种情况可以填满 重量为left的背包.转换成01背包问题
递推公式和之前的不一样，这一次找的是组合的数，之前找的是最大的重量, 二维数组dp[i][j] 表示nums中0-i下标物品任取,可以正好填满背包容量为j的组合数 dp[i][j] = dp[1][j] + dp[2][j] + dp[3][j] + .. + dp[i-1][j]
 */

export function findTargetSumWays(nums: number[], target: number): number {
    // 把数组分成两个组合left, right.left + right = sum, left - right = target.
    const sum: number = nums.reduce((a: number, b: number): number => a + b);
    if ((sum + target) % 2 || Math.abs(target) > sum)  return 0;
    const left: number = (sum + target) / 2;
    
    // 将问题转化为装满容量为left的背包有多少种方法
    // dp[i]表示装满容量为i的背包有多少种方法
    const dp: number[] = new Array(left + 1).fill(0);
    dp[0] = 1;  // 装满容量为0的背包有1种方法（什么也不装）
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = left; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }
    return dp[left];
};

//回溯
export function findTargetSumWays1(nums: number[], target: number): number {
    let ans:number = 0 // => 返回的数值
    function DFS(nums:number[],num:number,deep:number):void {
        num == target && deep == nums.length && ans++
        if(deep == nums.length)
            return 
        DFS(nums,num+nums[deep],deep+1)
        DFS(nums,num-nums[deep],deep+1)
    }
    DFS(nums,0,0)
    return ans
};