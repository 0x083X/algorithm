namespace D{
    /**
     * Leecode 104
     * 要求
     * 给定一个二叉树，找出其最大深度。二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。说明: 叶子节点是指没有子节点的节点。
     * 思路
     * 通过后序遍历，从底部开始记录每个节点的左右子树的深度，然后选出最深的继续向上判断
     */
    function DFS(root: TreeNode | null):number{
        if(root == null)
            return 0
        const leftD:number = DFS(root.left)
        const rightD:number = DFS(root.right)
        //找出左右子树中最大的高度
        const deep = Math.max(leftD,rightD) + 1
        return deep
    }
    function maxDepth(root: TreeNode | null): number {
        return DFS(root)
    };
}