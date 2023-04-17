/**
 * Leecode 738
 * 要求
 * 当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。

给定一个整数 n ，返回 小于或等于 n 的最大数字，且数字呈 单调递增 。

0 <= n <= 109

思路:
从后往前遍历!!,如果是递减的不用管，碰到递增的将前面的数-1，然后把后面的数变成9，继续往前遍历

 */

export function monotoneIncreasingDigits(n: number): number {
    const str: string = n.toString()
    const arr: string[] = str.split('')
    let flag: number = str.length  //flag记录从哪个位置开始变成9
    for (let i = str.length - 1; i >= 1; i--) {
        if (arr[i - 1] <= arr[i])
            continue
        else if (arr[i - 1] > arr[i]) {
            arr[i - 1] = String.fromCharCode(arr[i - 1].charCodeAt(0) - 1) //将前一个数-1
            flag = i
        }
    }
    for (let i = flag; i < str.length; i++) {
        arr[i] = '9'
    }
    console.log(arr)
    return parseInt(arr.join(''))
};