/**
 * Leecode 62
 * 要求
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

思路:
简单的网格动态规划
 */
export function uniquePaths(m: number, n: number): number {
    const grid:number[][] = new Array(m).fill(1).map(item=>new Array(m).fill(1))
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            grid[i][j] = grid[i-1][j] + grid[i][j-1]
        }
    }
    return grid[m-1][n-1]
};