/**
 * Leecode 40
 * 要求
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用 一次 。

注意：解集不能包含重复的组合。

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30

思路:
所有情况考虑回溯
只能使用1次 考虑 每次回溯的时候是上一次回溯时的下一个元素 或者 bool数组
不能包含重复的组合 回溯参数中加上startIndex,不考虑startIndex之前的元素(本题不行，因为数组中有重复的元素)，进一步的我们可以将结果排序后使用toStirng比较值来去重（超时），
换一种思路来看不能包含重复的组合,如果一个数组中存在两个1，一个前面的1和一个后面的1，在遍历的过程中前面一个1所记录的合理的数组一定把后面的1能够记录的合理的数组给包括了，因为是去重的，所以我们不需要在考虑后面的1的情况(可以先给数组排序，排序之后判断前一个数和后一个数是否相同来解决)
 */

export function combinationSum2(candidates: number[], target: number): number[][] {
    const ans: number[][] = []
    const arr: number[] = []
    const flag: number[] = new Array(101).fill(0)
    candidates.sort((a, b) => a - b)
    function backTraking(candidates: number[], target: number, startIndex: number, sum: number) {
        if (sum > target)
            return
        if (sum == target) {
            ans.push(Object.assign([], arr))
            return
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (i > 0 && candidates[i] == candidates[i - 1] && flag[i - 1] == 0) //去重,flag[i-1]等于0就是代表是第一层for循环往后走,代表就是下标为i-1的所有的遍历结果已经找出来了.
                continue
            if (!flag[i]) { //如果没被用过
                arr.push(candidates[i])
                flag[i] = 1
                backTraking(candidates, target, i + 1, sum + candidates[i])
                arr.pop() //回溯
                flag[i] = 0
            }
        }
    }
    backTraking(candidates, target, 0, 0)
    return ans
};
//本题的关键点在于巧妙的利用了排序+flag(判断元素是否使用的数组)来去重
//--排序后如果第二个数和第一个数相同，第一个数遍历过程中已经把第二个数所能包含的情况全部包括了不需要继续管第二个数


//万能set
export function combinationSum21(candidates: number[], target: number): number[][] {
    const ans: number[][] = []
    const arr: number[] = []
    candidates.sort((a, b) => a - b)
    function backTraking(candidates: number[], target: number, sum: number, startIndex: number) {
        if (sum > target)
            return
        if (sum == target)
            ans.push(Object.assign([], arr))
        const set = new Set()
        for (let i = startIndex; i < candidates.length; i++) {
            if (set.has(candidates[i]))
                continue
            set.add(candidates[i])
            arr.push(candidates[i])
            backTraking(candidates, target, sum + candidates[i], i + 1)
            arr.pop()
        }
    }
    backTraking(candidates, target, 0, 0)
    return ans
};