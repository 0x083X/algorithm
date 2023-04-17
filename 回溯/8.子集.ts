/**
 * Leecode 78
 * 要求
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

思路
数组中的元素互不相同!!!重要
枚举所有的可能(for不太可能)直接用回溯
 */

export function subsets(nums: number[]): number[][] {
    const ans: number[][] = []
    const arr: number[] = []
    ans.push(arr) //加入空集
    function backTraking(nums: number[], startIndex: number) {
        for (let i = startIndex; i < nums.length; i++) {
            arr.push(nums[i])
            ans.push(Object.assign([], arr))
            backTraking(nums, i + 1)
            arr.pop()
        }
    }
    backTraking(nums, 0)
    return ans
};