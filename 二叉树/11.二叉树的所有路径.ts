/**
 * Leecode 257
 * 要求 :
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
叶子节点 是指没有子节点的节点。
    思路：
    DFS前序遍历 
 */

export function DFS(root: TreeNode | null, str: string, strs: string[]) {
    // 前序遍历
    str += root.val //中
    if (root.left == null && root.right == null)  //碰到叶子节点了
        strs.push(str) //往字符串数组中加入该条路径
    else {
        str += '->' //在下一个元素加进来之前添加一个箭头
        if (root.left != null)
            DFS(root.left, str, strs) //左,回溯藏在函数里了
        if (root.right != null)
            DFS(root.right, str, strs) //右
    }
}
export function binaryTreePaths(root: TreeNode | null): string[] {
    const strs: string[] = []
    if (root != null)
        DFS(root, "", strs)
    return strs
};