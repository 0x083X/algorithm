/**
 * Leecode 236
 * 要求
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

树中节点数目在范围 [2, 105] 内。
-109 <= Node.val <= 109
所有 Node.val 互不相同 。
p != q
p 和 q 均存在于给定的二叉树中。

    思路:
    后序遍历(从底部开始判断p、q的状态，将该状态从底往顶传), 1.要考虑p、q是否存在祖先和子孙的关系
 */

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    function DFS(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
        if (root == null) //如果root为空返回null
            return null
        if (root == p || root == q) //如果碰到了p或者q，直接返回(该情况将考虑p、q是否存在祖先和子孙关系的情况给解决了)
            return root
        const leftSide = DFS(root.left, p, q) //左侧遍历
        const rightSide = DFS(root.right, p, q) //右侧遍历
        if (leftSide != null && rightSide != null) //如果左侧和右侧分别是q和p，该节点正好是最近的祖先节点
            return root
        else if (leftSide != null && rightSide == null) //如果左侧出现了p或者q
            return leftSide
        else if (rightSide != null && leftSide == null)
            return rightSide
    }
    return DFS(root, p, q)
};