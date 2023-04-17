/**
 * Leecode 435
 * 要求
 * 给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。返回 需要移除区间的最小数量，使剩余区间互不重叠 。

1 <= intervals.length <= 105
intervals[i].length == 2
-5 * 104 <= starti < endi <= 5 * 104

思路:按照左区间进行排序,
 */

export function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a,b)=>a[0]-b[0]) //排序
    let ans:number = 0, right:number = intervals[0][1]
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < right) {
            ans++ 
            right = Math.min(right,intervals[i][1]) //更新最小right
        }
        else right = intervals[i][1] //更新right
    }
    return ans
};