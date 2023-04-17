/**
 * Leecode 47
 * 要求 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 
 * 1 <= nums.length <= 8
-10 <= nums[i] <= 10

思路:
全排列问题可以对数组进行排序,去重做法和其他的相同
 */
export function permuteUnique(nums: number[]): number[][] {
    const ans: number[][] = []
    const arr: number[] = []
    const flag: number[] = new Array(nums.length).fill(0)
    nums.sort((a, b) => a - b)
    function backTraking(nums) {
        if (arr.length == nums.length)
            ans.push(Object.assign([], arr))
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1] && flag[i - 1] == 0)
                continue
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