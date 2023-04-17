/**
 * Leecode 93
 * 要求
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

1 <= s.length <= 20
s 仅由数字组成

思路
要考虑所有的情况,for循环不太能行，数值量较小，直接上回溯枚举+剪枝
 */


export function restoreIpAddresses(s: string): string[] {
    const ans: string[] = []
    let strs: string = ''
    function backTraking(s: string, startIndex: number, len: number) {
        if (len > 4) //len是用.分割后 总共有几块(IP地址是4块)
            return
        if (s.length == startIndex && len == 4)
            ans.push(strs.substring(0, strs.length - 1))
        for (let i = startIndex; i < s.length; i++) {
            const n: number = strs.length
            const str = s.substring(startIndex, i + 1)
            if (isT(str)) { //如果合理
                strs += str + '.'
                backTraking(s, i + 1, len + 1)
                strs = strs.substring(0, n) //回溯
            }
            else continue //如果不合理跳过这种情况
        }
    }
    function isT(str: string): boolean {
        if (str.length > 3)
            return false
        if (str[0] == '0' && str.length > 1)
            return false
        if (parseFloat(str) > 255)
            return false
        return true
    }
    backTraking(s, 0, 0)
    return ans
};