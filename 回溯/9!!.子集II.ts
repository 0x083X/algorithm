/**
 * Leecode 90
 * 要求
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

1 <= nums.length <= 10
-10 <= nums[i] <= 10

思路
!!可能包含重复元素,需要去重
和其他的去重思想一样，如果后面一个数等于前面一个数,就代表前面一个数已经把后面的数的所有可能全部包括了，直接跳过这种情况
回溯 + startIndex + bool数组
 */

export function subsetsWithDup(nums: number[]): number[][] {
    const ans: number[][] = []
    const arr: number[] = []
    const flag: number[] = new Array(nums.length).fill(0)
    nums.sort((a, b) => a - b) //排序
    ans.push(arr)
    function backTraking(nums: number[], startIndex: number) {
        for (let i = startIndex; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1] && !flag[i - 1]) //如果碰到了后一个等于前一个数的情况并且前一个数的所有情况已经遍历完了
                continue
            arr.push(nums[i])
            ans.push(Object.assign([], arr))
            flag[i] = 1
            backTraking(nums, i + 1)
            arr.pop()
            flag[i] = 0
        }
    }
    backTraking(nums, 0)
    return ans
};

//万能去重
export function subsetsWithDup1(nums: number[]): number[][] {
    const ans: number[][] = []
    const arr: number[] = []
    ans.push(arr)
    nums.sort((a, b) => a - b)
    function backTraking(nums: number[], startIndex: number) {
        const set = new Set()
        for (let i = startIndex; i < nums.length; i++) {
            if (set.has(nums[i])) //如果该层递归的set已经存在了nums[i]
                continue
            arr.push(nums[i])
            ans.push(Object.assign([], arr))
            set.add(nums[i])
            backTraking(nums, i + 1)
            arr.pop()
        }
    }
    backTraking(nums, 0)
    return ans
};