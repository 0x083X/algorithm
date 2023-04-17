/**
 * Leecode239
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
返回 滑动窗口中的最大值 。
思路
自己构建一个单调队列(最前面是队列维护的最大值)
存在三个方法pop\push\front
pop(value:number)只有当最大值(队列最前面的)要被弹出的时候,才弹出数据
push(value:number)push进元素时，如果队列中前面的元素比它小的都pop掉
front()获取滑动窗口的最大值
 */

//单调队列
export class myDequeue{
    //单调队列
    public arr:number[]
    constructor(){
        this.arr = []
    }
    inqueue(value:number){
        while(this.arr.length > 0 && this.arr[this.arr.length-1] < value){
            this.arr.pop()
        }
        this.arr.push(value)
    }
    dequeue(value:number){
        if(this.arr.length > 0 && this.arr[0] == value){
        //移除队列开头的元素
            this.arr.shift()
        }
    }
    getMax():number{
        return this.arr[0]
    }
}
export function maxSlidingWindow(nums: number[], k: number): number[] {
    const arr:myDequeue = new myDequeue()
    //返回的数组
    const rArr:number[] = []
    //先填充单调队列
    for(let i = 0; i < k; i++){
        arr.inqueue(nums[i])
    }
    rArr.push(arr.getMax())
    for(let i = k; i < nums.length; i++){
        //先pop在push
        //pop是nums[i-k]的元素,push是nums[k]的元素
        arr.dequeue(nums[i-k])
        arr.inqueue(nums[i])
        rArr.push(arr.getMax())
    }
    return rArr
};