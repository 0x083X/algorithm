/**
 * 使用ts构造二叉树
 * 二叉树本质上就是一个链表
 */

export class TreeNode {
    public val:number 
    public leftNode:TreeNode 
    public rightNode:TreeNode
    constructor(val:any, leftNode:any, rightNode:any){
        this.val = val === null ? -1 : val
        this.leftNode = leftNode == null ? null : leftNode
        this.rightNode = rightNode == null ? null : rightNode
    }
}

//传入数组构造二叉树
export function createTree(arrs: any[]) {
    if(arrs.length == 0) return 
    //将数组的第一位入栈
    const stack:any[] = []
    stack.push(arrs.shift())
    //如果栈不为空
    while(stack.length) {
        let len = stack.length
        //将栈中的元素全部弹出,构造二叉树，并弹入新的节点
        while(len--){
            //弹出节点
            let val = stack.shift()
            //在arrs中弹出对应的左右子树
            let left = arrs.length == 0 ? null : arrs.shift()
            let right = arrs.length == 0 ? null : arrs.shift()
            //构造二叉树
            const leftNode = new TreeNode(left,null,null)
            const rightNode = new TreeNode(right,null,null)
            const root = new TreeNode(val,leftNode,rightNode)
            console.log(root)
            //入栈
            if(left != null)  
                stack.push(left)
            if(right != null)
                stack.push(right)
        }
    }
} 
createTree([1,2,3,4,5])
