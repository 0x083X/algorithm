/**
 * Leecode 1047
 * 输入 一个 小写 字母组成的s，重复删除s中两个相邻且相同的字母，重复执行操作，直到无法删除
 * 思路
 * 用栈来解决问题
 */

export function removeDuplicates(s: string): string {
    const stack:string[] = []
    for(const s1 of s) {
        const len:number = stack.length
        if(stack.length == 0 || s1 != stack[len-1]){
            stack.push(s1)
        }
        else {stack.pop()}
    }
    return stack.join('')
}