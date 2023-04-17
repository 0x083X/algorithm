/**
 * Leecode 139
 * 要求
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s 和 wordDict[i] 仅有小写英文字母组成
wordDict 中的所有字符串 互不相同

条件过大，不适合回溯。使用动态对话，将字典看作物品，s看作背包，本题是一个完全背包问题。dp[i]代表背包是s中0-i下标构成的子串是否是合理的。dp[i] = dp[i-j] && isTF(i-j)
 */


export function wordBreak(s: string, wordDict: string[]): boolean {
    const dp: boolean[] = new Array(s.length + 1).fill(false) // => 初始化
    dp[0] = true
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            let str: string = s.slice(j, i)
            if (wordDict.includes(str) && dp[j]) {
                dp[i] = true
                break
            }
        }
    }
    return dp[s.length]
};