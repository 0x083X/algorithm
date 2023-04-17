/**
 * Leecode 669
 * 要求
 * 给你二叉搜索树的根节点 root ，同时给定最小边界low 和最大边界 high。通过修剪二叉搜索树，使得所有节点的值在[low, high]中。修剪树 不应该 改变保留在树中的元素的相对结构 (即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 唯一的答案 。
所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。

树中节点数在范围 [1, 104] 内
0 <= Node.val <= 104
树中每个节点的值都是 唯一 的
题目数据保证输入是一棵有效的二叉搜索树
0 <= low <= high <= 104

思路:
和删除二叉树的搜索树的节点相似,碰到了区间外的节点，如果比区间小的话，直接判断右子树中是否有合理的树(左子树更小)，返回右子树中合理二叉搜索树的根节点给上一层，如果比区间大的话，判断左子树中是否存在合理的树，返回合理的树的根给上一层
 */

export function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    function DFS(root: TreeNode | null, low: number, high: number): TreeNode | null {
        if (root == null)
            return root
        else if (root.val < low) { //碰到了小的数  
            const right: TreeNode | null = DFS(root.right, low, high) //判断右子树是否合理，返回合理右子树的根节点
            return right
        }
        else if (root.val > high) {
            const left: TreeNode | null = DFS(root.left, low, high) //判断左子树是否合理，返回合理左子树的根节点
            return left
        }
        root.left = DFS(root.left, low, high) //判断当前节点左子树是否合理，将左子树变成合理左子树
        root.right = DFS(root.right, low, high)
        return root
    }
    return DFS(root, low, high)
};