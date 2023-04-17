/**
 * Leecode 144\145\94
 * 要求: 给一个二叉树的根节点，返回该二叉树的前中后序遍历的结果
 * 思路
 * 前序 : 中左右
 * 中序 : 左中右
 * 后序 : 左右中
 */
namespace A{
    class TreeNode{
    val :number 
    left : TreeNode 
    right  : TreeNode
}
//前序
//1.递归
function qian(root: TreeNode, nums:Array<number>):void{
    if(root == null)
        return
    //加root的val值加入到nums中
    nums.push(root.val)
    //遍历root的左节点
    qian(root.left, nums)
    //遍历root的右节点
    qian(root.right, nums)
} 
function preorderTraversal(root: TreeNode | null): number[] {
    const nums: number[] = []
    if(root != null) 
        qian(root,nums)
    return nums
};

//迭代 用栈来实现？
function preorderTraversal1(root: TreeNode | null): number[] {
    const stack:Array<TreeNode> = []
    const nums:number[] = []
    if(root != null)
      stack.push(root)
    while(stack.length) {
        //栈顶元素出栈，依次加入右节点和左节点(因为左节点要先出来)
        const root:TreeNode = stack.pop()!
        //中左右，先读取数值
        nums.push(root.val)
        if(root.right != null)
          stack.push(root.right)
        if(root.left != null)
          stack.push(root.left)
    }
    return nums
};


//2.后序遍历
//递归
function hou(root: TreeNode | null, nums:number[]) {
    if(root == null)
        return
    //往左节点遍历
    hou(root.left, nums)
    hou(root.right, nums)
    nums.push(root.val)
}
function postorderTraversal(root: TreeNode | null): number[] {
    const nums:number[] = []
    hou(root,nums)
    return nums
};

//迭代
//前序遍历的顺序是 中左右，修改一下顺序可以变成中右左的结果，然后将结果数组颠倒就变成了左右中的结果
function postorderTraversal1(root: TreeNode | null): number[] {
    const stack:TreeNode[] = []
    const nums:number[] = []
    if(root != null)
        stack.push(root)
    while(stack.length != 0){
        const root = stack.pop()
        nums.push(root.val)
        if(root.left != null) 
            stack.push(root?.left)
        if(root?.right != null)
            stack.push(root.right)
    }
    //反转nums
    nums.reverse()
    return nums
};


//中序
//递归
function inorderTraversal1(root: TreeNode | null): number[] {
    const nums:number[] = []
    const stack:TreeNode[] = []
    let cur = root
    while(cur != null || stack.length != 0){
        //如果cur不等于null，继续往左节点遍历
        if(cur != null){
            stack.push(cur)
            cur = cur.left
        }
        //如果cur == null了 将节点取出，加入右节点
        else{
            const root = stack.pop()
            nums.push(root.val) //中
            cur = root.right // 右
        }
    }
    return nums
};
}