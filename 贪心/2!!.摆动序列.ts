/**
 * Leecode 376
 * 要求
 * 如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为 摆动序列 。第一个差（如果存在的话）可能是正数或负数。仅有一个元素或者含两个不等元素的序列也视作摆动序列。

例如， [1, 7, 4, 9, 2, 5] 是一个 摆动序列 ，因为差值 (6, -3, 5, -7, 3) 是正负交替出现的。

相反，[1, 4, 7, 2, 5] 和 [1, 7, 4, 5, 5] 不是摆动序列，第一个序列是因为它的前两个差值都是正数，第二个序列是因为它的最后一个差值为零。
子序列 可以通过从原始序列中删除一些（也可以不删除）元素来获得，剩下的元素保持其原始顺序。

给你一个整数数组 nums ，返回 nums 中作为 摆动序列 的 最长子序列的长度 。

1 <= nums.length <= 1000
0 <= nums[i] <= 1000

思路:
贪心,遍历数组，如果碰到递增的把递增的扔掉只剩最后一个，如果碰到递减的把递减扔掉只剩最后一个
注意首部就出现平坡的情况,flag = 0就在首部出现0的时候有用
 */
export function wiggleMaxLength(nums: number[]): number {
    if (nums.length == 1)
        return 1
    else if (nums.length == 2)
        return nums[1] - nums[0] == 0 ? 1 : 2
    let ans: number = nums[1] - nums[0] == 0 ? 1 : 2
    let flag = nums[1] - nums[0] > 0 ? 1 : nums[1] - nums[0] == 0 ? 0 : -1 //判断前一个差值是负还是正
    for (let i = 2; i < nums.length; i++) { //遍历数组
        if (flag == 0) { //如果flag是0，代表最开始的数据有相同部分
            if (nums[i] - nums[i - 1] > 0) {
                ans++
                flag = 1
            }
            else if (nums[i] - nums[i - 1] < 0) {
                ans++
                flag = -1
            }
        }
        else if (flag == 1 && nums[i] - nums[i - 1] < 0) {//如果前一个差值是正，后一个差值是负
            ans++
            flag = -1 //修改前一个flag值
        }
        else if (flag == -1 && nums[i] - nums[i - 1] > 0) {
            ans++
            flag = 1 //修改前一个值
        }
        //其他情况ans是不增加的
    }
    return ans
};  