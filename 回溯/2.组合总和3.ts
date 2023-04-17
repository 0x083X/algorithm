/**
 * Leecode 216
 * 要求
 * 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
只使用数字1到9
每个数字 最多使用一次 
返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回

2 <= k <= 9
1 <= n <= 60

思路
列表、集合找回溯，加剪枝
 */

export function combinationSum3(k: number, n: number): number[][] {
    const flag: number[] = new Array(9).fill(0)//作为bool数组
    const ans: number[][] = []
    const arr: number[] = []
    function backTraking(k: number, n: number, startIndex: number) {
        if (n < 0) //剪枝
            return
        if (arr.length == k && n == 0)
            ans.push(Object.assign([], arr)) //添加数组
        let end:number = 9 - k + arr.length + 1 //剪枝
        for (let i = startIndex; i <= end; i++) {
            if (flag[i])  //如果该数已经被使用过了
                continue
            else {
                arr.push(i)
                //改变flag数组
                flag[i] = 1
                backTraking(k, n - i, i + 1) //回溯包括在函数中了
                //回溯
                flag[i] = 0
                arr.pop()
            }
        }
    }
    backTraking(k, n, 1)
    return ans
};