/**
 * Leecode 450
 * 要求
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
一般来说，删除节点可分为两个步骤：
首先找到需要删除的节点；
如果找到了，删除它。

节点数的范围 [0, 104].
-105 <= Node.val <= 105
节点值唯一
root 是合法的二叉搜索树
-105 <= key <= 105

思路
二叉搜索树的递归写法(下一层返回节点拼接到当前层的左子树或者右子树上)
考虑的情况
1.左子树和右子树为空 (叶子节点)
2.左子树不为空，右子树为空(跳过该层节点)
3.右子树不为空，左子树为空(跳过该层节点)
4.左右子树都不为空,一个做法将右子树拼接到左子树上，一种将左子树拼接到右子树上，我选择第二种，将该节点的左子树拼接到右子树最左侧节点(右子树中最小的值)的上
 */

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    function DFS(root: TreeNode | null, key: number): TreeNode | null {
        if (root == null)
            return root
        if (root.val == key) { //碰到了返回值(终止条件)
            if (root.left == null && root.right == null) //碰到了第一种情况，叶子节点，直接返回null（相当于删除节点）
                return null
            else if (root.left != null && root.right == null) //碰到了第二种情况
                return root.left //返回当前节点的左节点(相当于忽略了当前节点，也就是删除当前节点)
            else if (root.right != null && root.left == null) //碰到了第三种情况
                return root.right
            else if (root.left != null && root.right != null) { //碰到了最后一种情况
                let cur: TreeNode = root.right //获取右节点
                while (cur.left)
                    cur = cur.left //找右节点的最左侧的值
                cur.left = root.left //将左子树变成右节点最左侧的左子树
                return root.right //变成了第三种情况直接跳过该节点
            }
        }
        if (root.val > key) { //递归条件
            root.left = DFS(root.left, key) //将返回的值作为左子树
        }
        else if (root.val < key) {
            root.right = DFS(root.right, key) //将返回的值作为右子树
        }
        return root //返回该节点
    }
    return DFS(root, key)
};