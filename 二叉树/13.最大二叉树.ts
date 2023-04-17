/**
 * Leecode 654
 * 要求
 * 给定一个不重复的整数数组 nums 。 最大二叉树 可以用下面的算法从 nums 递归地构建:
创建一个根节点，其值为 nums 中的最大值。
递归地在最大值 左边 的 子数组前缀上 构建左子树。
递归地在最大值 右边 的 子数组后缀上 构建右子树。
返回 nums 构建的 最大二叉树 。

思路
构造二叉树 首先想到前序遍历 (递归写法)
 */

export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if (nums.length == 0)
        return null
    let index: number = 0, maxNum: number = -1
    for (let i = 0; i < nums.length; i++) { //找出当前的最大值
        if (nums[i] > maxNum) {
            maxNum = nums[i]
            index = i
        }
    }
    const val: number = nums[index]
    const root: TreeNode = new TreeNode(val) //构造当前树的根节点(中)
    const leftArr: number[] = nums.slice(0, index) //获取左子树
    const rightArr: number[] = nums.slice(index + 1) //获取右子树
    root.left = constructMaximumBinaryTree(leftArr) //左
    root.right = constructMaximumBinaryTree(rightArr) //右
    return root
}
//可以不需要重新构造函数，使用left和right来代替重新构造函数
export function DFS(nums:number[],left:number,right:number): TreeNode | null {
    if (right - left == 0)
        return null
    let index: number = 0, maxNum: number = -1
    for (let i = left; i < right; i++) { //找出当前的最大值
        if (nums[i] > maxNum) {
            maxNum = nums[i]
            index = i
        }
    }
    const val: number = nums[index]
    const root: TreeNode = new TreeNode(val) //构造当前树的根节点(中)
    if(nums.length == 1)
        return root
    root.left = DFS(nums,left,index) //左
    root.right = DFS(nums,index+1,right) //右
    return root
}
export function constructMaximumBinaryTree1(nums: number[]): TreeNode | null {
    return DFS(nums,0,nums.length)
}