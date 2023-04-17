/**
 * Leecode 337
 * 要求:
 * 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。

除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。

给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。

树的节点数在 [1, 104] 范围内
0 <= Node.val <= 104

 思路
树形dp
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


export function rob(root: TreeNode | null): number {
    function DFS(root: TreeNode | null): number[] {
        if (root == null)
            return [0, 0]
        let left: number[] = DFS(root.left)
        let right: number[] = DFS(root.right)
        let val1 = root.val + left[0] + right[0] // => 偷该节点，left[0]表示不偷左子树获取的最大值
        let val2 = Math.max(...left) + Math.max(...right) // => 不偷该节点，获取的最大值
        return [val2, val1]
    }
    const [max1, max2] = DFS(root)
    return Math.max(max1, max2)
};