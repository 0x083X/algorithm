/**
 * leecode 110 平衡二叉树
 * 要求
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 
 * 思路
 * 用后序计算每个节点左右子二叉树的深度，判断该节点左右二叉树的深度差值是否大于1
 * @param root
 * @returns 
 */

export function DFS(root:TreeNode | null):number{
    if(root == null)
        return 0
    const leftD = DFS(root.left)
    const rightD = DFS(root.right)
    //如果左右子树中存在任意子子树已经失衡的就一致返回-1
    if(leftD == -1 || rightD == -1)
        return -1
    //如果树失衡返回-1
    if(Math.abs(leftD - rightD) > 1)
        return -1
    return Math.max(leftD,rightD) + 1
}

export function isBalanced(root: TreeNode | null): boolean {
    return DFS(root) == -1 ? false : true
};