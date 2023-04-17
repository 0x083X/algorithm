/**
 * Leecode 131
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

回文串 是正着读和反着读都一样的字符串

1 <= s.length <= 16
s 仅由小写英文字母组成

思路:
回溯+剪枝(使用startIndex来切割子串)
 * 
 */

export function partition(s: string): string[][] {
    const ans: string[][] = []
    const arr: string[] = []
    function backTraking(s: string, startIndex: number) {
        if (startIndex == s.length) {
            ans.push(Object.assign([], arr)) //因为碰到不是回文子串的情况直接跳过了没有机会让startIndex++
        }
        for (let i = startIndex; i < s.length; i++) {
            const str = s.substring(startIndex, i + 1) //切割子串
            if (isT(str)) { //如果切割子串是回文的
                arr.push(str)
                backTraking(s, i + 1)
                arr.pop() //回溯
            }
            else continue //如果不是跳过该次
        }
    }
    function isT(str: string): boolean {
        if (str.length == 1)
            return true
        for (let i = 0; i < Math.floor(str.length / 2); i++)
            if (str[i] != str[str.length - i - 1])
                return false
        return true
    }
    backTraking(s, 0)
    return ans
};