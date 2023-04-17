/**
 * Leecode 77
 * 要求
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
你可以按 任何顺序 返回答案。

1 <= n <= 20
1 <= k <= n

思路:用普通的回溯思路可以直接解决
回溯三部曲(和递归三部曲相同)
1.返回值(一般为void)，参数
2.返回条件
3.递归条件
 */

export function combine(n: number, k: number): number[][] {
    const arr: number[] = [] //集合
    const ans: number[][] = [] //返回的数组
    function backTraking(n: number, k: number, startIndex: number) {
        if (arr.length == k) { //如果集合长度和要求的相同
            const mid = Object.assign([], arr)
            //不能直接push arr,因为每次push的arr都是相同的
            ans.push(mid)
            return
        }
        for (let i = startIndex; i <= n; i++) {
            arr.push(i) // 入arr
            backTraking(n, k, i + 1)
            arr.pop() //回溯
        }
    }
    backTraking(n, k, 1)
    return ans
};