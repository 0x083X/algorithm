/**
 * 大顶堆:每个结点的值都大于或等于其左右孩子结点的值
 * 构建大顶堆的思路:给定一个序列，按照序列的顺序先依次组成一个完全二叉树，然后再将不稳定的节点的值进行处理，形成大顶堆
 */

function MaxHeap(nums:number[]):number[]{
    //先找到最后一个非叶子节点
    let num:number = Math.floor(nums.length/2-1)
    //每一个非叶子节点都构建属于自己部分的大顶堆
    for(; num >= 0; num--){
        createHeap(num,nums)
    }
    return nums
}
//创建大顶堆的函数
function createHeap(index:number, nums:number[]){
    //找出左节点
    let leftNode = index*2+1
    //找出右节点
    let rightNode = index*2+2
    let max = index
    //找出三者的最大值
    if(leftNode < nums.length && nums[leftNode] > nums[max]){
        max = leftNode
    }
    if(rightNode < nums.length && nums[rightNode] > nums[max]){
        max = rightNode
    }
    //交换最大值到顶点(如果最大值不等于index)
    if(max != index){
        let temp = nums[max]
        nums[max] = nums[index]
        nums[index] = temp
        //交换后继续判断交换后的数据会不会影响字节点的大顶堆，如果影响，继续按照该规则进行排序(此时的max下标是之前的叶子节点之一(被交换的)))
        createHeap(max,nums)
    }
}

console.log(MaxHeap([20,40,45,25,50,15,10,30,35]))


//构造小顶堆和大顶堆同理
function MinHeap(nums:number[]):number[]{
    //先找到最后一个非叶子节点
    let num:number = Math.floor(nums.length/2-1)
    //每一个非叶子节点都构建属于自己部分的大顶堆
    for(; num >= 0; num--){
        createMinHeap(num,nums)
    }
    return nums
}
//创建大顶堆的函数
function createMinHeap(index:number, nums:number[]){
    //找出左节点
    let leftNode = index*2+1
    //找出右节点
    let rightNode = index*2+2
    let min = index
    //找出三者的最大值
    if(leftNode < nums.length && nums[leftNode] < nums[min]){
        min = leftNode
    }
    if(rightNode < nums.length && nums[rightNode] < nums[min]){
        min = rightNode
    }
    //交换最大值到顶点(如果最大值不等于index)
    if(min != index){
        let temp = nums[min]
        nums[min] = nums[index]
        nums[index] = temp
        //交换后继续判断交换后的数据会不会影响字节点的大顶堆，如果影响，继续按照该规则进行排序(此时的max下标是之前的叶子节点之一(被交换的)))
        createMinHeap(min,nums)
    }
}
