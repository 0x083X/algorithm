/**
 * Leecode 55
 * 要求
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。

1 <= nums.length <= 3 * 104
0 <= nums[i] <= 105

思路:贪心,每一次获取能跳跃的区间，找出区间内的能跳到的最远的地方，也就是获取另外的区间
 */

export function canJump(nums: number[]): boolean {
    let n: number = nums[0] //n代表能跳到最远的距离
    if (n >= nums.length - 1)
        return true
    for (let i = 1; i <= n; i++) { //i从1开始遍历一次遍历一个单位
        n = Math.max(n, i + nums[i]) //找出能跳到的最远的距离
        if (n >= nums.length - 1)
            return true
    }
    return false //如果在for循环中达不到最后就返回false
};