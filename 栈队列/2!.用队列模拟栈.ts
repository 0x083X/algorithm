/**
 * Leecode 225
 * 要求实现MyStack类
 * void push(x:number) 将元素x压入栈顶
 * pop():number 移除返回栈顶元素
 * top():number 返回栈顶元素
 * empty():boolean 如果栈为空返回true
 * 思路
 * 用一个队列解决问题,入队列照常，出队列的时候，将队列前length-1一个元素重新入队列，然后弹出最后一个元素
 */

export class MyStack{
    public arr1:number[] 
    constructor(){
        this.arr1 = []
    }
    push(x:number):void{
        this.arr1.push(x)
    }
    pop():number{
        if(this.arr1.length == 0) {return -1}
        let n:number = this.arr1.length - 1
        for(let i = 0; i < n ; i++){
            //重新入队列
            this.arr1.push(this.arr1.unshift())
        }
        return this.arr1.unshift()
    }
    top():number {
        if(this.arr1.length == 0) return -1
        return this.arr1[this.arr1.length-1] 
    }
    empty():boolean{
        if(this.arr1.length == 0) return true
        return false
    }
}