namespace C{
interface TreeNode{
    val : number
    left : TreeNode | null
    right : TreeNode | null
}
//迭代
function levelOrder(root: TreeNode | null): number[][] {
    const nums:number[][] = []
    //用队列来解决问题
    const line:(TreeNode | null)[] = []
    if(root != null)
        line.push(root)
    while(line.length != 0) {
        //计算目前队列中的长度
        const len:number = line.length
        //创造一维数组
        const arr:number[] = []
        //遍历数组
        for(let i = 0; i < len; i++){
            const root:TreeNode = <TreeNode>line.shift()
            arr.push(root.val)
            if(root.left != null) 
                line.push(root.left)
            if(root.right != null)
                line.push(root.right)
        }
        nums.push(arr)
    }
    return nums
};


//递归写法(假前序遍历)
//nums是要返回的二维数组,root是当前的节点值，deep是深度值
function fn(nums:number[][], root: TreeNode | null, deep:number){
    if(root == null) 
        return
    //deep值的每层创建一个新的Array<number>
    if(nums.length == deep) 
        nums.push(new Array())
    //将节点值添加到相应深度的nums中
    nums[deep].push(root.val)
    fn(nums,root.left,deep+1)
    fn(nums,root.right,deep+1)
}
function levelOrder1(root: TreeNode | null): number[][] { 
    const nums:number[][] = []
    fn(nums,root,0)
    return nums
}
}