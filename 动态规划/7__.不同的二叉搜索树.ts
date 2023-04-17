/**
 * Leecode 96
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 * 
 * 思路:
 * 我们列举以节点1、2、3为根节点的二叉搜索树,可以发现关系节点为4的二叉搜索树就是 节点为1的二叉搜索树的数量 + 节点为2的二叉搜索树的数量 + 节点为3的二叉搜索树的数量 
 */

export function numTrees(n: number): number {
    const dp: number[] = []
    dp[0] = -1
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = 2 * dp[i - 1]
        for (let j = 1; j < i - 1; j++) {
            dp[i] += dp[j] * dp[i - j - 1]
        }
    }
    return dp[n]
};