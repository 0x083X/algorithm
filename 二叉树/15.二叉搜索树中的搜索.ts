/**
 * Leecode 700
 * 要求
 * 给定二叉搜索树（BST）的根节点 root 和一个整数值 val。你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。
 * 思路
 * 根据二叉搜索树的特性,如果搜索的值比节点值大就去右子树中搜索，如果小就去左子树中搜索
 */

//1.递归(不是前、中、后序，而是根据二叉搜索树的特性进行)
export function DFS(root: TreeNode | null, val: number): TreeNode | null {
    if (root == null || root.val == val)  //碰到了终止条件或者找到了值
        return root
    let cur: TreeNode | null = null
    if (root.val > val)  //如果找的值小于目前的节点值，去节点的左侧树找
        cur = DFS(root.left, val)
    if (root.val < val)
        cur = DFS(root.right, val)
    return cur
}
export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    return DFS(root, val)
};

//2.迭代
function searchBST1(root: TreeNode | null, val: number): TreeNode | null {
    while (root != null) {
        if (root.val > val)
            root = root.left
        else if (root.val < val)
            root = root.right
        else break
    }
    return root
};