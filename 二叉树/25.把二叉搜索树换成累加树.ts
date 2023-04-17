/**
 * Leecode 538
 * 要求
 * 给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

提醒一下，二叉搜索树满足下列约束条件：

节点的左子树仅包含键 小于 节点键的节点。
节点的右子树仅包含键 大于 节点键的节点。
左右子树也必须是二叉搜索树。

树中的节点数介于 0 和 104 之间。
每个节点的值介于 -104 和 104 之间。
树中的所有值 互不相同 。
给定的树为二叉搜索树。

思路
二叉搜索树的中序遍历(左中右)是升序数组，本题要求从最大的数开始遍历(降序)可以通过右中左的顺序遍历，通过双指针，一个指向数组最后一个元素，一个指向前面一个元素，不断相加，不断向数组的左侧移动来达到将二叉搜索数变成累加数的特性
 */

export function convertBST(root: TreeNode | null): TreeNode | null {
    let cur: number = 0 //前面的指针
    function DFS(root: TreeNode | null) {
        if (root == null) //碰到叶子节点什么都不返回
            return
        DFS(root.right) //右
        root.val += cur //当前节点的值是当前的val值加上前面一个指针的值
        cur = root.val //更新val
        DFS(root.left)//左
    }
    DFS(root)
    return root
};