/**
 * Leecode 46
 * 要求
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同

思路:
所有可能的问题找回溯,本题使用回溯+剪枝
排列问题不需要startIndex。
 */

export function permute(nums: number[]): number[][] {
    const ans: number[][] = []
    const arr: number[] = []
    const flag: number[] = new Array(nums.length).fill(0) //需要bool数组约束
    function backTraking(nums: number[]) { //全排列不需要startIndex
        if (arr.length == nums.length)
            ans.push(Object.assign([], arr))
        for (let i = 0; i < nums.length; i++) { //从下标0开始，不需要startIndex约束，用bool数组约束
            if (!flag[i]) {
                flag[i] = 1
                arr.push(nums[i])
                backTraking(nums)
                flag[i] = 0
                arr.pop()
            }
        }
    }
    backTraking(nums)
    return ans
};