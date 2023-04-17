namespace D{
    /**
     * Leecode 101
     * 要求:给你一个二叉树的根节点 root ， 检查它是否轴对称
     * 思路: 
     * DFS或者是BFS
     * 主要判断左子树是否和右子树对称
     * 具体的判断是左子树的左节点(左子树)要和右子树的右节点(右子树)相同，左子树的右节点(右子树)要和右子树的左节点(左子树)相同
     */

    //1.BFS（队列和栈）
    //队列
    function isSymmetric(root: TreeNode | null): boolean {
        //BFS的写法(BFS的写法有很多变种)
        const queue:TreeNode[] = []
        if(root != null) {
            queue.push(root.left)
            queue.push(root.right)
        }
        while(queue.length > 0) {
            //取出左右节点
            const left:TreeNode|null = queue.shift()
            const right:TreeNode|null = queue.shift()
            //如果两个都是null就是true
            if(left == null && right == null)
                continue
            //如果其中一个是null，另一个不是null就返回false,或者值不相同
            if(left == null && right != null || left != null && right == null || left.val != right.val)
                return false
            //将左右节点的各自的左右节点继续加入队列
            queue.push(left.right)
            queue.push(right.left)
            queue.push(left.left)
            queue.push(right.right)
        }
        return true
    };

    //栈--特殊
    function isSymmetric1(root: TreeNode | null): boolean {
        //像这种逻辑性强（对称）BFS中选择栈和选择堆都是可以的
        const stack:TreeNode[] = []
        if(root != null) {
            stack.push(root.right)
            stack.push(root.left)
        }
        while(stack.length > 0) {
            //取出左右节点
            const left:TreeNode|null = stack.pop()
            const right:TreeNode|null = stack.pop()
            //如果两个都是null就是true
            if(left == null && right == null)
                continue
            //如果其中一个是null，另一个不是null就返回false,或者值不相同
            if(left == null && right != null || left != null && right == null || left.val != right.val)
                return false
            //将左右节点的各自的左右节点继续加入队列
            stack.push(left.right)
            stack.push(right.left)
            stack.push(left.left)
            stack.push(right.right)
        }
        return true
    };



    //DFS
    function DFS(left:TreeNode|null, right:TreeNode|null):boolean{
        if(left == null && right == null)
            return true
        else if (left != null && right == null || left == null && right != null || left.val != right.val)
            return false
        const mid1 = DFS(left.right,right.left)
        const mid2 = DFS(left.left,right.right)
        //如果mid1和mid2两个分支遍历过程中出现false就代表不行
        return mid1 && mid2
    }
    function isSymmetric3(root: TreeNode | null): boolean {
        //DFS
        //首先明确 返回值和参数,返回值肯定是bool,参数的话题目主要比较的是left和right的节点值以及相应的左子树和右子树，所以参数就是left和right。
        //判断条件， left、right都是空的情况，left、right有一个不是空的情况，以及left、right都不是空，但是数据不一样的情况
        //递归的逻辑，比较的是当前节点left的左子树和right右子树的关系，所以将当前节点left的左子树和right的right比较，left的right和right的left比较
        return DFS(root.left,root.right)
    };
}