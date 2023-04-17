/**
 * Leecode150
 * 输入值是一个完整的逆波兰表达式字符串，要求求出该逆波兰表达式的值
 * 思路
 * 用栈存放字符串中的数值，当遇到操作符时操作栈中的数据，并将新数据重新放入到栈中
 */
export function evalRPN(tokens: string[]): number {
    const arr = []
    for(const str of tokens){
        if(str == '+') {
            arr.push(arr.pop()+arr.pop())
        }
        else if(str == '*' ){
            arr.push(arr.pop()*arr.pop())
        }
        else if(str == '-'){
            let a = arr.pop()
            arr.push(arr.pop()-a)
        }
        else if(str == '/'){
            let a = arr.pop()
            arr.push(Math.trunc(arr.pop()/a))
        }
        else {arr.push(Number(str))}
    }
    return arr[0]
};