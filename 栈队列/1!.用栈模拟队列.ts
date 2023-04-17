/**
 * Leecode 232
 * 要求实现MyQueue类
 * void push(int x)将元素x推向末尾
 * int pop() 从队列开头移除并返回元素
 * int peek() 返回队列开头的元素
 * boolean empty() 如果队列为空返回true，否则返回false
 * 思路
 *  用两个栈来实现队列(arr1模拟正常的栈，arr2代表的是栈模拟队列操作)
 * push操作一切正常
 * 当进行到pop操作时,先判断arr2是否为空!!!，不为空的话弹出arr2中的数据，为空的话，将arr1中的数据pop()\push()进arr2后在arr2.pop()弹出数据
 */

export class MyQueue {
    public arr1:number[] 
    public arr2:number[] 
    constructor() {
        this.arr1 = []
        this.arr2 = []
    }
    push(index:number):void {
        this.arr1.push(index)
    }
    pop():number | undefined{
        if(this.arr2.length == 0) {
            while(this.arr1.length != 0){
                this.arr2.push(this.arr1.pop()!)
            }
        }
        //返回arr2中的数据
        return this.arr2.length == 0 ? undefined : this.arr2.pop()
    }
    peek():number{
        //返回队列开头元素，arr2中的最后一个或者是arr1中的第一个
        return this.arr2.length == 0 ? (this.arr1.length == 0 ? undefined : this.arr1[0])! : this.arr2[this.arr2.length-1]!
    }
    empty():boolean{
        if(this.arr1.length == 0 && this.arr2.length == 0) return true
        return false
    }
}