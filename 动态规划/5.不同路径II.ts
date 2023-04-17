/**
 * Leecode 63
 * 要求:
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。

思路:
正常网格动态规划,有障碍物的那一端为0
 */
export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const n:number = obstacleGrid.length
    const m:number = obstacleGrid[0].length
    let grid:number[][] = []
    obstacleGrid = obstacleGrid.map(items=>items.map(item=>item == 1 ? 0 : 1)) //转换obstaleGrid,将0转为1，1转为0 
    for(let i = 0; i < n; i++) { //判断第一行第一列是否存在0，也就是障碍物
        if(obstacleGrid[i][0] == 0) {
            for(let a = i; a < n; a++) {
                obstacleGrid[a][0] = 0
            }
            break
        }
    }
    for(let j = 0; j < m; j++) { //判断第一行第一列是否存在0，也就是障碍物
        if(obstacleGrid[0][j] == 0) {
            for(let b = j; b < m; b++) {
                obstacleGrid[0][b] = 0
            }
            break
        }
    }
    for(let i = 1; i < n; i++) { //递推模式
        for(let j = 1; j < m; j++) {
            if(obstacleGrid[i][j] == 0) //如果碰到了障碍物就跳过
                continue 
            obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1] //递推公式
        }
    }
    return obstacleGrid[n-1][m-1]
};