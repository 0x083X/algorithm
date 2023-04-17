/**
 * Leecode 17
 * 要求
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

0 <= digits.length <= 4
digits[i] 是范围 ['2', '9'] 的一个数字。

思路:
顺序组合问题(回溯) + 剪枝
 */

export function letterCombinations(digits: string): string[] {
    const phone: string[][] = [
        [],
        [],
        ['a', 'b', 'c'], //2
        ['d', 'e', 'f'], //3
        ['g', 'h', 'i'], //4
        ['j', 'k', 'l'], //5
        ['m', 'n', 'o'], //6
        ['p', 'q', 'r', 's'], //7
        ['t', 'u', 'v'], //8
        ['w', 'x', 'y', 'z'] //9
    ]
    const ans: string[] = []
    let str: string = ""
    function backTraking(phone: string[][], digits: string, index: number) {
        if (str.length == digits.length)
            ans.push(str) //str是深拷贝的不用担心
        for (let i = 0; i < digits[index].length; i++) {
            str += digits[index][i]
            backTraking(phone, digits, index + 1)
            str = str.slice(0, str.length - 1) //回溯
        }
    }
    backTraking(phone, digits, 0)
    return ans
};