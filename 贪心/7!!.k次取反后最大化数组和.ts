/**
 * Leecode 1005
 * 要求
 * 给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：

选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
重复这个过程恰好 k 次。可以多次选择同一个下标 i 。

以这种方式修改数组后，返回数组 可能的最大和 。

1 <= nums.length <= 104
-100 <= nums[i] <= 100
1 <= k <= 104

思路:
排序，先修改数组再求和,修改数组分成负数和0和正数的情况,将负数变成整数，碰到0直接将次数都用在0上(碰到0代表前面已经没有0)，碰到正数判断剩余次数是偶数还是奇数，偶数直接返回，奇数重新排序数组，将第一个数变成负数
 */
export function largestSumAfterKNegations(nums: number[], k: number): number {
    let v = nums.length
    let sum: number = 0
    nums.sort((a, b) => a - b)
    for (let i = 0; i < k; i++) { //修改数组  i%v是为了防止k大于nums.length的情况
        if (nums[i%v] < 0) { //如果小于0换成0
            nums[i%v] = nums[i%v] * -1
        }
        else if (nums[i%v] == 0) //如果是0不用修改
            break
        else if (nums[i%v] > 0) { //如果大于0 判断剩余次数，偶数没事，奇数找出最小的变成负数
            const n: number = k - i
            if (n % 2 == 0) //如果是偶数则不需要
                break
            else { //如果是奇数,找出最小的将它变成负数  
                nums.sort((a, b) => a - b) //排序(防止之前负数变成整数影响结果)
                nums[0] = nums[0] * -1 //将最小的变成负数
            }
        }
    }
    for (let i = 0; i < nums.length; i++)
        sum += nums[i]
    return sum
};

//优化
export function largestSumAfterKNegations1(nums: number[], k: number): number {
    let n:number = nums.length
    // nums.sort((a,b)=>a-b) //排序 
    nums.sort((a,b)=>Math.abs(b)-Math.abs(a)) //根据绝对值大小来降序排列
    for(let i = 0; i < n; i++) {
        if(nums[i] < 0) {
            nums[i] *= -1 //将nums[i]变成整数
            k--
        }
        if(k == 0) //如果k等于0了跳出循环 
            break
    }
    if(k % 2 != 0) { //如果剩余次数为偶数不需要修改，如果为奇数将最小数变成负数
        // nums.sort((a,b)=>a-b)
        // nums[0] *= -1
        nums[n-1] = -nums[n-1] //绝对值降序排列最后一个数是绝对值最小的数
    }
    return nums.reduce((pre,cur)=>pre+cur)
};