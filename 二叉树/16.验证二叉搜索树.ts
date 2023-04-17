/**
 * Leecode 98
 * 要求
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
有效 二叉搜索树定义如下：
节点的左子树只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。

树中节点数目范围在[1, 104] 内
-231 <= Node.val <= 231 - 1

思路
1.根据二叉搜索树的特性1: 二叉搜索树的中序遍历结果是升序排列的,可以将二叉树通过中序转变成数组,判断数组是否是升序的
2.二叉树的特性2:节点比左子树的任意一个数要大(最大的是左子树根节点的最右侧的节点)，比右子树任意一个数要小(最小的是右子树节点最左侧的节点)

 */

//1.递归(中序)将二叉树转换为数组
export function isValidBST(root: TreeNode | null): boolean {
    const nums: number[] = []
    function DFS(root: TreeNode | null) {
        if (root == null) //终止条件
            return root
        DFS(root.left) //左
        nums.push(root.val) //中
        DFS(root.right) //右
    }
    DFS(root)
    //判断nums数组是否是升序的
    for (let i = 1; i < nums.length; i++)
        if (nums[i] <= nums[i - 1])
            return false
    return true
};

//2.方法1的变种--根据中序的特性,将判断数组是否升序通过双指针来实现
export function isValidBST1(root: TreeNode | null): boolean {
    let cur: TreeNode | null = null
    function DFS(root: TreeNode | null): boolean {
        if (root == null)
            return true
        const leftTF = DFS(root.left) //左
        //root一开始直接指向最左侧的节点,因为cur为null，就先不判断将cur初始为最左侧的元素(数组的第一个数),然后root变成cur的下一个数，之后开始进行判断root.val 是否大于 cur.val(也就是判断数组是否是升序的)
        if (cur != null && cur.val >= root.val) //中
            return false
        cur = root //相当于在数组中向后移动一格
        const rightTF = DFS(root.right) //右
        return leftTF && rightTF
    }
    return DFS(root)
};