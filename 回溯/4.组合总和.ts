/**
 * Leecode 39
 * 要求
 * 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 target 的不同组合数少于 150 个。

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
candidates 的所有元素 互不相同
1 <= target <= 40

思路:
回溯(暴力枚举) + 剪枝
 */
export function combinationSum(candidates: number[], target: number): number[][] {
    const ans: number[][] = []
    const arr: number[] = []
    function backTraking(candidates: number[], target: number, sum: number, startIndex: number) {
        if (sum > target)
            return
        if (sum == target) { //终止条件
            ans.push(Object.assign([], arr))
            return
        }
        //startIndex代表开始的位置,startIndex之前的元素都不需要了
        for (let i = startIndex; i < candidates.length; i++) {
            arr.push(candidates[i])
            backTraking(candidates, target, sum + candidates[i], i)//隐藏回溯
            arr.pop()
        }
    }
    backTraking(candidates, target, 0, 0)
    return ans
};