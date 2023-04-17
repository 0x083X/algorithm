/**
 * Leecode 509
 * 要求:
 * 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
给定 n ，请计算 F(n) 。

0 <= n <= 30

思路:简单动态规划
 */
export function fib(n: number): number {
    const arr: number[] = new Array(n+1).fill(0) //初始化dp数组,每一个数组值代表当前index下的斐波那契数
    arr[1] = 1 //初始化数组
    for (let i = 2; i <= n; i++) { //(递推顺序从前到后)
        arr[i] = arr[i - 1] + arr[i - 2] //递推公式
    }
    return arr[n] //打印dp数组
};
