/**
 * Leecode 235
 * 要求:
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。

思路:
通过二叉搜索数的特性来解决问题()
1.如果p和q分别位于二叉搜索数某个节点的左右侧(一个大一个小)就代表该节点就是最近的公共节点
2.如果p、q数值都大于二叉搜索树的节点就代表要去左子树中去寻找
3.如果q、p的数值都小于二叉搜索树的节点就代表要去右子树中去寻找
 */

//1.递归(自定义逻辑)
export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    function DFS(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
        if (root == null)
            return root
        if (p.val > root.val && q.val > root.val) { //如果都大于root，往右子树中找
            const rightSide = DFS(root.right, p, q)
            if (rightSide != null) //如果找到了就直接返回
                return rightSide
        }
        else if (p.val < root.val && q.val < root.val) { //如果都小于root，往左子树中寻找
            const leftSide = DFS(root.left, p, q)
            if (leftSide != null)
                return leftSide
        }
        else return root //包括了p、q是祖先节点和孙子节点的关系(p或者q的val等于root)，也包括了一边大一边小的关系(一个大一个小)
    }
    return DFS(root, p, q)
};

//迭代
export function lowestCommonAncestor1(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    while(root) {
        if(p.val > root.val && q.val > root.val)
            root = root.right
        else if(p.val < root.val && q.val < root.val)
            root = root.left
        else return root
    }
    return null
};