/**
 * Leecode 51
 * 要求
 * 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

 1 <= n <= 9

 思路:回溯
 */

 export function solveNQueens(n: number): string[][] {
    const ans: string[][] = []
    const arr: string[] = []
    let grid: string[][] = new Array(n).fill('.').map(v => new Array(n).fill('.'))
    function backTraking(grid: string[][], i: number) {
        if (i == n) {
            ans.push(Object.assign([], arr))
            return
        }
        for (let j = 0; j < n; j++) {
            grid[i][j] = 'Q' // i是固定的，j是变化的
            let flag: number = 0 //判断该Q是否是合理的
            for (let x = 0; x < i; x++) { //判断是否有Q和Q在一条纵线上
                if (grid[x][j] == 'Q') {
                    flag = 1
                    break
                }
            }
            let x1: number = i, y1: number = j, x2: number = i, y2: number = j
            while (x1 >= 0 && y1 >= 0) { //判断和其他Q是否在一条直线上
                x1--
                y1--
                if (x1 >= 0 && y1 >= 0 && grid[x1][y1] == 'Q') {
                    flag = 1
                    break
                }
            }
            while(x2 >= 0 && y2 < n) { //判断和其他Q是否在一条直线上
                x2--
                y2++
                if(x2 >= 0 && y2 < n && grid[x2][y2] == 'Q') {
                    flag = 1
                    break
                }
            }
            if (flag == 1) { //如果不符合跳过
                grid[i][j] = '.'
                continue
            }
            let mid: string = ''
            for (let a = 0; a < n; a++) {
                if (grid[i][a] != 'Q') {
                    mid += '.'
                }
                else mid += 'Q'
            }
            arr.push(mid)
            backTraking(grid, i + 1)
            arr.pop() //回溯       
            grid[i][j] = '.'
        }
    }
    backTraking(grid, 0)
    return ans
};