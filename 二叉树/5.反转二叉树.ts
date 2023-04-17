namespace C{
    /**
     * Leecode 226
     * 要求 :
     * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
     * 思路 :
     * 可以用DFS(前序遍历，然后交换左右子树来解决)，或者直接层序遍历交换左右节点解决
     */

    //BFS
    function invertTree(root: TreeNode | null): TreeNode | null {
        //BFS 遍历二叉树
        const stack:TreeNode[] = []
        if(root != null) {
            stack.push(root)
        }
        while(stack.length > 0) {
            const len = stack.length
            for(let i = 0; i < len; i++) {
                const root:TreeNode = stack.shift()
                if(root.left != null)
                    stack.push(root.left)
                if(root.right != null)
                    stack.push(root.right)
                const temp:TreeNode = root.right
                root.right = root.left
                root.left = temp
            }
        }
        return root
    };
    //DFS迭代
    function invertTree(root: TreeNode | null): TreeNode | null {
        //用栈来实现 DFS(前序遍历)
        const stack:TreeNode[] = []
        if(root != null)
            stack.push(root)
        while(stack.length > 0) {
            const root = stack[stack.length-1]
            if(root != null){
                const root = stack.pop()
                //往栈中加东西
                if(root.right != null)
                    stack.push(root.right)
                if(root.left != null)
                    stack.push(root.left)
                stack.push(root)
                stack.push(null)
            }
            else {
                //加空值弹出
                stack.pop()
                //弹出中间的节点
                const root = stack.pop()
                //交换左右两个节点
                const temp = root.right
                root.right = root.left
                root.left = temp
            }
        }
        return root
    };
    //DFS递归
    function qian(root: TreeNode | null):TreeNode{
        if(root == null)
            return root
        //交换左右节点
        const temp = root.right
        root.right = root.left
        root.left = temp
        //遍历左子树
        qian(root.left)
        qian(root.right)
        return root
    }
    function invertTree(root: TreeNode | null): TreeNode | null {
        return qian(root)
    };
}