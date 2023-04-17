/**
 * Leecode 501
 * 要求
 * 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。
如果树中有不止一个众数，可以按 任意顺序 返回。
假定 BST 满足如下定义：
结点左子树中所含节点的值 小于等于 当前节点的值
结点右子树中所含节点的值 大于等于 当前节点的值
左子树和右子树都是二叉搜索树

树中节点的数目在范围 [1, 104] 内
-105 <= Node.val <= 105

思路:可以通过二叉搜索树的特性,通过中序遍历解决问题(双指针pre和root)，也可以通过BFS枚举数组节点
 */

//1.BFS(没有使用二叉搜索树的特性)
export function findMode(root: TreeNode | null): number[] {
    const map = new Map() //哈希表
    const stack: TreeNode[] = []
    let MAX = 0
    const ans: number[] = []
    if (root != null)
        stack.push(root)

    while (stack.length > 0) {
        const n: number = stack.length
        for (let i = 0; i < n; i++) {
            const root: TreeNode = stack.pop()! //从栈中获取节点
            const val: number = map.get(root.val) == undefined ? 1 : map.get(root.val) + 1 //获取节点值的个数
            map.set(root.val, val) //更新map
            if (val > MAX) { //碰到了新的众数
                MAX = val //更新MAX
                ans.length = 0 //将之前的ans中的数据全部弹出
                ans.push(root.val)
            }
            else if (val == MAX) { //如果碰到了相同个数的
                ans.push(root.val)
            }
            if (root.left != null)
                stack.push(root.left)
            if (root.right != null)
                stack.push(root.right)
        }
    }
    return ans
};


//2.通过二叉搜索树的特性,(中序遍历+双指针(pre,root))
function findMode1(root: TreeNode | null): number[] {
    const ans: number[] = []
    let pre: TreeNode | null = null //前节点
    let MAX: number = 0, Same: number = 0
    function DFS(root: TreeNode | null) {
        if (root == null)
            return
        DFS(root.left)
        if (pre == null) //如果是准备初始化
            Same = 1  //将相同的值赋值为1
        else if (pre != null && pre.val == root.val) //如果前后节点相同
            Same++
        else Same = 1 //如果前后节点不同就让Same重新回到1
        pre = root //往前走
        if (MAX == Same)  //如果碰到两个众数
            ans.push(root.val)
        else if (MAX < Same) { //如果碰到了新的众数
            MAX = Same //更新MAX
            ans.length = 0 //将之前接入到数组中的数全部弹出
            ans.push(root.val) //更新数组
        }
        DFS(root.right) //右
    }
    DFS(root)
    return ans
};