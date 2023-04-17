namespace E{
    /**
     * Leecode 111
     * 要求
     * 给定一个二叉树，找出其最小深度。最小深度是从根节点到最近叶子节点的最短路径上的节点数量。说明：叶子节点是指没有子节点的节点。
     * 思路
     * 和最大深度的一样，不过是选出最小深度的往上进行后序遍历
     */
    function DFS(root: TreeNode | null):number{
        if(root == null)
            return 0
        const leftD = DFS(root.left)
        const rightD = DFS(root.right)
        //如果左子树为空的情况，代表左子树不含叶子节点，将这种情况给删除
        if(root.left == null && root.right != null)
            return rightD + 1
        if(root.left != null && root.right == null)
            return leftD + 1
        return Math.min(leftD,rightD) + 1
    }
    function minDepth(root: TreeNode | null): number {
        return DFS(root)
    };
}