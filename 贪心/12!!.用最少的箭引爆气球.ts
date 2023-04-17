/**
 * Leecode 452
 * 要求:
 * 有一些球形气球贴在一堵用 XY 平面表示的墙面上。墙面上的气球记录在整数数组 points ，其中points[i] = [xstart, xend] 表示水平直径在 xstart 和 xend之间的气球。你不知道气球的确切 y 坐标。

一支弓箭可以沿着 x 轴从不同点 完全垂直 地射出。在坐标 x 处射出一支箭，若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足  xstart ≤ x ≤ xend，则该气球会被 引爆 。可以射出的弓箭的数量 没有限制 。 弓箭一旦被射出之后，可以无限地前进。

给你一个数组 points ，返回引爆所有气球所必须射出的 最小 弓箭数 。

1 <= points.length <= 105
points[i].length == 2
-231 <= xstart < xend <= 231 - 1

思路：
排序判断各自区间的交集情况,引入最小右边界的概念！
 */

export function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[0] - b[0]) //按照初始位置大小排序
    let ans: number = 1 //points.length大于等于1，我们for循环从1开始，
    let right: number = points[0][1] //最小右边界
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > right) { //如果超出最小右边界
            ans++
            right = points[i][1] //更新右边界
        }
        else { //如果碰到了重合的
            right = Math.min(right, points[i][1]) //右边界是两个交集中最短的
        }
    }
    return ans
};