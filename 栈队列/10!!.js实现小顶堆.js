/**
 * js实现小(大)顶堆,ts是实现不了的
 */

class Heap {
    constructor(fn) { // => fn接受一个函数,用来设置Heap是大顶堆还是小顶堆
        this.stack = [] // 普通数组
        this.comFn = fn
    }
    push(num) {
        this.stack.push(num) // => 向数组中插入元素
        let index = this.stack.length - 1 // => 子元素下标
        let pIndex = Math.floor((index - 1) / 2) // => 在数组中寻找插入元素的父节点,小(大)顶堆都是完全二叉树
        while (pIndex >= 0 && this.compare(this.stack[pIndex], this.stack[index]) > 0) { // 迭代实现比较子节点和父节点的值是否符合小(大)顶堆
            [this.stack[index], this.stack[pIndex]] = [this.stack[pIndex], this.stack[index]] // 如果不满足,交换父节点和子节点的值
            index = pIndex //父节点更新了,判断新的父节点和它的父节点是否满足条件
            pIndex = Math.floor((index - 1) / 2)
        }
    }
    pop() {
        let ans = this.stack[0] // => 找到顶堆要弹出的值
        this.stack[0] = this.stack.pop() // => 填充弹出的位置
        let index = 0 // => 根节点下标
        let left = 1 // => 左孩子下标, left + 1 是右孩子下标
        let sIndex = this.compare(this.stack[left], this.stack[left + 1]) > 0 ? left + 1 : left // => 找出左右之间更小的
        while (sIndex !== undefined && this.compare(this.stack[index], this.stack[sIndex]) > 0) {
            [this.stack[index], this.stack[sIndex]] = [this.stack[sIndex], this.stack[index]]
            index = sIndex
            left = 2 * index + 1
            sIndex = this.compare(this.stack[left], this.stack[left + 1]) > 0 ? left + 1 : left
        }
        return ans
    }
    compare(pValue, value) {
        if (pValue == undefined)
            return 1
        if (value == undefined)
            return -1
        return this.comFn(pValue, value) //返回指定规则下的值
    }
}

//优化后
class Heap {
    constructor(compareFn) {
        this.compareFn = compareFn;
        this.queue = [];
    }

    // 添加
    push(item) {
        // 推入元素
        this.queue.push(item);

        // 上浮
        let index = this.size() - 1; // 记录推入元素下标
        let parent = Math.floor((index - 1) / 2); // 记录父节点下标

        while (parent >= 0 && this.compare(parent, index) > 0) { // 注意compare参数顺序
            [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];

            // 更新下标
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    // 获取堆顶元素并移除
    pop() {
        // 堆顶元素
        const out = this.queue[0];

        // 移除堆顶元素 填入最后一个元素
        this.queue[0] = this.queue.pop();

        // 下沉
        let index = 0; // 记录下沉元素下标
        let left = 1; // left 是左子节点下标 left + 1 则是右子节点下标
        let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

        while (searchChild !== undefined && this.compare(index, searchChild) > 0) { // 注意compare参数顺序
            [this.queue[index], this.queue[searchChild]] = [this.queue[searchChild], this.queue[index]];

            // 更新下标
            index = searchChild;
            left = 2 * index + 1;
            searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        }

        return out;
    }

    size() {
        return this.queue.length;
    }

    // 使用传入的 compareFn 比较两个位置的元素
    compare(index1, index2) {
        // 处理下标越界问题
        if (this.queue[index1] === undefined) return 1;
        if (this.queue[index2] === undefined) return -1;

        return this.compareFn(this.queue[index1], this.queue[index2]);
    }

}



let sHeap = new Heap((a, b) => a - b) // => 小到大排,小顶堆
sHeap.push(1)
sHeap.push(2)
sHeap.push(3)
sHeap.push(4)
sHeap.push(1)
sHeap.push(2)
console.log(sHeap.pop())
console.log(sHeap)