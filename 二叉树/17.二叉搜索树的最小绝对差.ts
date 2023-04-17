/**
 * Leecode 530
 * 要求
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
差值是一个正数，其数值等于两值之差的绝对值。

    树中节点的数目范围是 [2, 104]
    0 <= Node.val <= 105
    
    思路
    二叉搜索树的中序遍历的结果数组是顺序的,转变为求数组中任意两个数的最小绝对差
 */

export function getMinimumDifference(root: TreeNode | null): number {
    let pre: TreeNode | null = null
    let MIN: number = 100001
    function DFS(root: TreeNode | null) {
        if (root == null)
            return null
        DFS(root.left) //左
        if (pre != null) { //中
            MIN = Math.min(MIN, root.val - pre.val)
        }
        pre = root
        DFS(root.right) //右
    }
    DFS(root)
    return MIN
};