/**
 * Leecode 37
 * 要求 
 * 编写一个程序，通过填充空格来解决数独问题。

数独的解法需 遵循如下规则：

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
数独部分空格内已填入了数字，空白格用 '.' 表示。

 board.length == 9
board[i].length == 9
board[i][j] 是一位数字或者 '.'
题目数据 保证 输入数独仅有一个解

思路:回溯
 */

export function solveSudoku(board: string[][]): void {
    const n: number = 9
    function backTraking(board: string[][]): boolean {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] == '.') {
                    for (let v = 1; v <= 9; v++) {
                        if (isT(board, i, j, v + '')) {
                            console.log(2)
                            board[i][j] = v + ''
                            const result = backTraking(board)
                            if (result == true)
                                return true
                            board[i][j] = '.'//回溯
                        }
                    }
                    return false
                }
            }
        }
        return true
    }
    function isT(board: string[][], i: number, j: number, v: string): boolean {
        for (let y = 0; y < 9; y++)
            if (board[i][y] == v)
                return false
        for (let x = 0; x < 9; x++)
            if (board[x][j] == v)
                return false
        const n1: number = Math.floor(i / 3)
        const n2: number = Math.floor(j / 3)
        for (let x = n1 * 3; x < n1 * 3 + 3; x++)
            for (let y = n2 * 3; y < n2 * 3 + 3; y++)
                if (board[x][y] == v)
                    return false
        return true
    }
    backTraking(board)
};