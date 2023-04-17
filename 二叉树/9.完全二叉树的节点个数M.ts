/**
 * Leecode 222
 * 要求
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点
 * 思路
 * 普通二叉树的解法: 使用递归(后序遍历)求出左子树的数量和右子树的数量，返回值就是左子树的数量+右子树的数量+1(本身的节点)
 * 完全二叉树的解法: 使用递归(后序遍历),思路和上面的一致，不过有一点优化，可以判断左右子树是不是满二叉树(如果该节点左节点一直往左走的深度和该节点右节点一直往右走的深度相同，就代表它是满二叉树)，如果是满二叉树直接调用公式返回满二叉树的节点数量
 */


//普通二叉树
export function DFS(root: TreeNode | null):number {
    if(root == null) 
        return 0
    const leftNum = DFS(root.left)
    const rightNum = DFS(root.right)
    return leftNum + rightNum + 1
}
export function countNodes(root: TreeNode | null): number {
    return DFS(root)
}

//完全二叉树
export function DFS1(root: TreeNode | null):number{
    if(root == null)
        return 0
    let leftNode:TreeNode | null = root.left
    let rightNode:TreeNode | null = root.right
    let leftD:number = 0, rightD:number = 0
    while(leftNode != null){
        leftNode = leftNode.left
        leftD++
    }
    while(rightNode != null){
        rightNode = rightNode.right
        rightD++
    }
    if(leftD == rightD)
        return (2 << leftD) - 1

    const leftNum = DFS1(root.left)
    const rightNum = DFS1(root.right)
    return leftNum + rightNum + 1
}
export function countNodes1(root: TreeNode | null): number {
    return DFS1(root)
}



