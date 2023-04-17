/**
 * Leecode 491
 * 要求
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。

1 <= nums.length <= 15
-100 <= nums[i] <= 100

思路
子序列不是子数组，所以不需要用startIndex切割得到子字符串，普通遍历就行，因为是判断子序列是否递增，不能排序(影响子序列元素的位置),但是该题存在相同的元素，需要对结果集进行一个去重。之前是通过 bool数组进行去重，本题通过在每层循环中构造一个set来记录遍历过的元素来去重
 */


export function findSubsequences(nums: number[]): number[][] {
    const ans: number[][] = []
    const arr: number[] = []
    function backTraking(nums: number[], startIndex: number) {
        const set = new Set() //每一层递归都是不一样的set
        for (let i = startIndex; i < nums.length; i++) {
            if (nums[i] < (arr.length == 0 ? -101 : arr[arr.length - 1]) && set.has(nums[i])) //如果满足递增条件push进arr
                continue
            arr.push(nums[i])
            if (arr.length > 1) //如果长度大于2
                ans.push(Object.assign([], arr))
            set.add(nums[i]) //往该层的set中添加元素
            backTraking(nums, i + 1)
            arr.pop() //回溯
        }
    }
    backTraking(nums, 0)
    return ans
};

