/**
 * Leecode 45
 * 要求
 * 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

0 <= j <= nums[i] 
i + j < n
返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

1 <= nums.length <= 104
0 <= nums[i] <= 1000
题目保证可以到达 nums[n-1]

思路:
贪心，记录每一步可以跳到的最大的区间,每个区间的跳跃次数都为1
 */
export function jump(nums: number[]): number {
    let cur: number = 0 //区间左侧
    let right: number = 0 //区间右侧
    let ans: number = 0 //跳跃数
    for (let i = 0; i < nums.length; i++) {
        right = Math.max(right, nums[i] + i) //更新右区间
        if (cur == i) { //如果走到了一个新区间
            if (cur != nums.length - 1) {
                cur = right //更新区间
                ans++
                if(cur >= nums.length) break
            }
        }
    }
    return ans
};