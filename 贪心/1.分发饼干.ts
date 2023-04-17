/**
 * Leecode 455
 * 要求
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

1 <= g.length <= 3 * 104
0 <= s.length <= 3 * 104
1 <= g[i], s[j] <= 231 - 1

思路:
贪心,用最大的饼干去满足胃口大的孩子
 */

export function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b) //排序
    s.sort((a, b) => a - b)
    let ans: number = 0
    let n: number = g.length - 1, m: number = s.length - 1
    for (let i = m; i >= 0; i--) { //从最大的饼干开始
        while (n >= 0 && g[n] > s[i]) //如果孩子胃口更大找胃口小的孩子
            n--
        if (n < 0)
            break
        else if (n >= 0) { // 如果找到了胃口小的孩子
            ans++
            n--
        }
    }
    return ans
};