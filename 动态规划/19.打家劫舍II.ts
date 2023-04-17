/**
 * Leecode 213
 * 要求
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

思路:
和打家劫舍1相同,将环形拆分成线性来考虑.1.只考虑首元素不考虑尾元素.2.只考虑尾元素不考虑首元素.3.首尾元素都考虑到(情况被包含了)
 */

export function rob(nums: number[]): number {
    const dp1: number[] = new Array(nums.length - 1) // => 考虑首元素不考虑尾元素
    const dp2: number[] = new Array(nums.length) // => 考虑尾元素不考虑首元素
    if (nums.length == 1)
        return nums[0]
    if (nums.length == 2)
        return Math.max(nums[0], nums[1])
    dp1[0] = nums[0]
    dp1[1] = Math.max(nums[0], nums[1])
    dp2[1] = nums[1]
    dp2[2] = Math.max(nums[1], nums[2])
    for (let i = 2; i < nums.length - 1; i++) { // => dp1递推
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i])
    }
    for (let i = 3; i < nums.length; i++) { // => dp2递推
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i])
    }
    return Math.max(dp1[nums.length - 2], dp2[nums.length - 1])
};