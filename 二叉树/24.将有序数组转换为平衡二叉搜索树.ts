/**
 * Leecode 108
 * 要求
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 按 严格递增 顺序排列

思路
思路和通过中序后序数值构造二叉树类似，找出根节点(数组中间的)，然后构造根节点的左子树和右子树，递归构造二叉树
 */

export function sortedArrayToBST(nums: number[]): TreeNode | null {
    function DFS(nums: number[], left: number, right: number) {
        //区间的定义是[)
        if (left == right) //不满足区间返回null
            return null
        const mid: number = Math.floor((left + right) / 2) //找出当前数组的中间元素(根节点)
        const root = new TreeNode(nums[mid]) //创造根节点
        root.left = DFS(nums, left, mid) //构造根节点的左子树(注意区间)
        root.right = DFS(nums, mid + 1, right) //构造根节点的右子树(注意区间)
        return root
    }
    return DFS(nums, 0, nums.length)
};