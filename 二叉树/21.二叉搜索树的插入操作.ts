/**
 * Leecode 701
 * 要求
 * 给定二叉搜索树（BST）的根节点 root 和要插入树中的值 value ，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据 保证 ，新值和原始二叉搜索树中的任意节点值都不同。
注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回 任意有效的结果 。

树中的节点数将在 [0, 104]的范围内。
-108 <= Node.val <= 108
所有值 Node.val 是 独一无二 的。
-108 <= val <= 108
保证 val 在原始BST中不存在。

思路:
比root小往左走，比root大往右走

 
 */

export function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    function DFS(root: TreeNode | null, val: number): TreeNode | null {
        if (root == null) //碰到了插入条件
            return new TreeNode(val)
        if (root.val > val)
            root.left = DFS(root.left, val)
        else if (root.val < val)
            root.right = DFS(root.right, val)
        return root
    }
    return DFS(root, val)
};