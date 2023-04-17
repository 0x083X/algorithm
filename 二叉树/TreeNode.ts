//全局定义treeNode节点

class TreeNode {
    public val: number
    public left: TreeNode | null
    public right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val == undefined ? 0 : val)
        this.left = left == null ? null : left
        this.right = right == null ? null : right
    }
}

