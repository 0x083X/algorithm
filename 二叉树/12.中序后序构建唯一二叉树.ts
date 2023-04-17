/**
 * Leecode 106
 * 要求
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 * 思路
 * 1.后序数组为0返回null
 * 2.获取后序数组最后一个元素数值,是当前二叉树根节点的val，通过该val构造根节点
 * 3.如果后序数组长度为1，代表该节点是叶子节点，返回该叶子节点
 * 4.如果该数组长度不为1，通过根节点切割中序数组，获取左子树和右子树的中序遍历的数组
 * 5.通过中序遍历得出的左子树数组的长度去切割右数组
 * 6.传入左子树的中序和左子树的后序，右子树的中序和右子树的后序递归构造树
 */
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (postorder.length == 0) //后序遍历数组为空返回null
        return null
    const val: number = postorder[postorder.length - 1] //获取当前树根节点的val值
    const root: TreeNode = new TreeNode(val) //构造根节点
    if (postorder.length == 1) //如果是叶子节点返回
        return root
    let index: number = 0
    for (; index < inorder.length; index++) //找到中序遍历的切割点
        if (inorder[index] == val)
            break
    const leftInorder: number[] = inorder.slice(0, index) //左子树的中序结果
    const rightInorder: number[] = inorder.slice(index + 1) //右子树的中序结果
    const n: number = leftInorder.length //获取左子树中序结果的长度
    const leftPostorder: number[] = postorder.slice(0, n) //获取左子树的后序结果
    const rightPostorder: number[] = postorder.slice(n, postorder.length - 1) //获取右子树的后序结果
    root.left = buildTree(leftInorder, leftPostorder) //传入左子树的中后序数组构造左子树
    root.right = buildTree(rightInorder, rightPostorder) //构建右子树
    return root
}

//拓展，通过前序和中序构造唯一二叉树的思想也是一致,前序和后序不能构建唯一二叉树
/**
 * 1。如果前序数组为空，返回null
 * 2. 前序数组的第一个元素是当前树的根节点的val值，通过该val值构造一个根节点
 * 3.如果前序数组的长度为1，代表该节点是叶子节点，返回叶子节点
 * 4.通过该根节点去中序数组中寻找切割点
 * 5.通过切割点切割出左子树的中序遍历结果，和右子树的中序遍历结果
 * 6.通过左子树的中序遍历结果的长度去切割前序遍历，切割出左子树前序遍历结果和右子树前序遍历结果
 * 7.递归构造该树的左右子树
 */

export function buildTree1(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length == 0)
        return null

    const val: number = preorder[0]
    const root: TreeNode = new TreeNode(val)
    if (preorder.length == 1)
        return root

    let index: number = 0
    for (; index < inorder.length; index++)
        if (inorder[index] == val)
            break

    const leftInorder: number[] = inorder.slice(0, index)
    const rightInorder: number[] = inorder.slice(index + 1)
    const n: number = leftInorder.length
    const leftPreorder: number[] = preorder.slice(1, n + 1)
    const rightPreorder: number[] = preorder.slice(n + 1)
    root.left = buildTree(leftPreorder, leftInorder)
    root.right = buildTree(rightPreorder, rightInorder)
    return root
};