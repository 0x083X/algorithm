/**
 * Leecode 474
 * 要求
 * 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

请你找出并返回 strs 的最大子集的长度，该子集中 最多 有 m 个 0 和 n 个 1 。

如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

1 <= strs.length <= 600
1 <= strs[i].length <= 100
strs[i] 仅由 '0' 和 '1' 组成
1 <= m, n <= 100

思路:
多维01背包,dp[i][j]表示背包容量为i(能装多少个0)、j(能装多少个1)的背包最多能背多少个子集()
 */

export function findMaxForm(strs: string[], m: number, n: number): number {
    const dp: number[][] = new Array(m + 1).fill(0).map(item => new Array(n + 1).fill(0)) //dp是三维数组进行压缩后得到的二维数组
    for (const str of strs) { //遍历字符串数组
        let x: number = 0, y: number = 0 //x是单个字符 0出现的次数，y是单个字符，1出现的次数
        for (const item of str) { //item是单个字符
            item == '0' && x++
            item == '1' && y++
        }
        for (let i = m; i >= x; i--) { //出现了一个重物,将该重物放入到背包中
            for (let j = n; j >= y; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - x][j - y] + 1)
            }
        }
    }
    return dp[m][n]
};