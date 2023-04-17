/**
 * Leecode 20
 * 给定一个包括 () [] {}的字符串，判断字符串是否有效
 * 有效字符串需满足：
    1.左括号必须用相同类型的右括号闭合。
    2.左括号必须以正确的顺序闭合。
    3.每个右括号都有一个对应的相同类型的左括号
思路
通过栈来解决问题，如果元素是([{直接入栈，如果是)]}就和栈顶匹配，如果匹配失败就是false，如果匹配成功，栈pop()，最后判断栈是否为空
 * @param s
 * @returns 
 */


//1 代码优化
// function isValid(s: string): boolean {
//     const arr1:string[] = s.split('')
//     const stack:string[] = []
//     while(arr1.length){
//         let str:string = arr1.shift()!
//         //如果str是)]}
//         if([')',']','}'].includes(str)){
//             let str1:string = stack.pop()!
//             if(!isRight(str1,str)) return false
//         }
//         else {stack.push(str)}
//     }
//     return stack.length == 0 ? true : false
// };

// function isRight(a:string, b:string):boolean{
//     switch(a){
//         case '(' : return b == ')' ? true : false
//         case '[' : return b == ']' ? true : false
//         case '{' : return b == '}' ? true : false
//     }
//     return false
// }



//2代码优化
export function isValid(s: string): boolean{
    const arr:string[] = []
    if(s.length % 2 != 0) {return false}
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(') {arr.push(')')}
        else if(s[i] == '[') {arr.push(']')}
        else if(s[i] == '{') {arr.push('}')}
        else if(arr.length == 0 || s[i] != arr[arr.length-1]) {return false}
        else arr.pop()
    }
    return arr.length == 0
}