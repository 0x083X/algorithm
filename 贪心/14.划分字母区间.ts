/**
 * Leecode 763
 * 要求
 * 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。

注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。

返回一个表示每个字符串片段的长度的列表。

1 <= s.length <= 500
s 仅由小写英文字母组成

思路:求第一个元素在数组中最远的距离,这个区间内求出其他元素的最远的距离,字符串的长度就是它们中的最大值
用哈希表记录每一个字母出现的最远的位置
 */

export function partitionLabels(s: string): number[] {
    const arrs: number[] = new Array(26).fill(0) //用数组代替哈希表
    const ans:number[] = []
    for (let i = 0; i < s.length; i++) {
        arrs[s[i].charCodeAt(0) - 97] = i //记录最远位置
    }
    for(let i = 0; i < s.length; i++) {
        let right = arrs[s[i].charCodeAt(0)-97] //最远出现的位置
        let temp:number = i
        while( i + 1 <= right) { //区间中其他数最远的位置可能比right大
            i++
            right = Math.max(right,arrs[s[i].charCodeAt(0)-97]) //更新right
        }
        ans.push(i-temp+1) //将该次长度push进ans数组
    }
    return ans
};