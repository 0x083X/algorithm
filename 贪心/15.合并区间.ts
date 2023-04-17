/**
 * Leecode 56
 * 要求
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * 
 * 1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

思路:
左边界从小到大进行排序，后遍历，如果下一个左边界小于上一个右边界，合并，合并的左边界小右边界大
 */

export function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]) //排序
    const ans: number[][] = []
    let left: number = intervals[0][0] //左边界
    let right: number = intervals[0][1] //右边界
    for (let i = 1; i < intervals.length; i++) {
        while (i < intervals.length && intervals[i][0] <= right) { //如果有重合
            right = Math.max(intervals[i][1], right) //找出最大的右区间
            i++
        }
        if (i < intervals.length && intervals[i][0] > right) {
            ans.push([left, right]) //将区间push进ans
            left = intervals[i][0] //更新left
            right = intervals[i][1]  // 更新right
        }
    }
    ans.push([left, right]) //最后一个lefe和right区间没被放进来
    return ans
};