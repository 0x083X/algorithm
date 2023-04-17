/**
 * Leecode 53
 * 要求
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
    子数组 是数组中的一个连续部分。

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104

    思路:贪心,让n(子数组和)不断的和后一个数相加，过程中不断比较n+nums[i]和nums[i]的大小，如果前n个数的和不如第n个数，就只留下第n个数，如果该数是小于0的将该数也舍弃,将n重置为0(碰到下一个正数的时候)
 */

export function maxSubArray(nums: number[]): number {
    let n: number = nums[0] //初始化
    let ans: number = nums[0] //初始化
    for (let i = 1; i < nums.length; i++) {
        n = Math.max(n + nums[i], nums[i]) //改变n
        ans = Math.max(n, ans) //在判断n是否大于0之前进行赋值
        if (n < 0) //如果n还是小于0，去掉之前的数
            n = 0
    }
    return ans
}