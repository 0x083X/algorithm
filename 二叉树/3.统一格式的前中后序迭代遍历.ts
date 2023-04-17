//中序遍历
namespace B{
interface TreeNode{
    val : number
    left : TreeNode
    right : TreeNode
}
function inorderTraversal(root: TreeNode | null): number[] {
    const nums:number[] = []
    const stack = []
    if(root != null) 
        stack.push(root)
    while(stack.length != 0) {
        //头部元素不等于null
        if(stack[stack.length-1] != null){
            //出栈
            const root = stack.pop()
            //将右中左分别入栈
            if(root.right != null)
                stack.push(root.right)
            //中
            stack.push(root)
            //标记节点
            stack.push(null)
            //左
            if(root.left != null)
                stack.push(root.left)
        }
        //如果顶层等于null就代表要将中间的元素出栈
        else{   
            stack.pop() // 将null出栈
            const root = stack.pop() //将栈顶元素出栈
            //加入nums中
            nums.push(root.val)
        }
    }
    return nums
}


//前序和后序就是在中序的基础上修改入栈的顺序
//前序
function preorderTraversal(root: TreeNode | null): number[] {
    const nums:number[] = []
    const stack: (TreeNode | null)[] = []
    if(root != null) 
        stack.push(root)
    while(stack.length != 0) {
        //头部元素不等于null
        if(stack[stack.length-1] != null){
            //出栈
            const root = stack.pop()
            //将右左中分别入栈
            if(root.right != null)
                stack.push(root.right)
            if(root.left != null)
                stack.push(root.left)
            //中
            stack.push(root)
            //标记节点
            stack.push(null)
            
        }
        //如果顶层等于null就代表要将中间的元素出栈
        else{   
            stack.pop() // 将null出栈
            const root = stack.pop() //将栈顶元素出栈
            //加入nums中
            nums.push(root.val)
        }
    }
    return nums
}

//后序
function postorderTraversal(root: TreeNode | null): number[] {
    const nums:number[] = []
    const stack:(TreeNode | null)[] = []
    if(root != null) 
        stack.push(root)
    while(stack.length != 0) {
        //头部元素不等于null
        if(stack[stack.length-1] != null){
            //出栈
            const root = stack.pop()
            //将中右左分别入栈
            //中
            stack.push(root)
            //标记节点
            stack.push(null)
            if(root.right != null)
                stack.push(root.right)
            if(root.left != null)
                stack.push(root.left)
            
        }
        //如果顶层等于null就代表要将中间的元素出栈
        else{   
            stack.pop() // 将null出栈
            const root = stack.pop() //将栈顶元素出栈
            //加入nums中
            nums.push(root.val)
        }
    }
    return nums
}
}