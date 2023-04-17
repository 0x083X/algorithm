/**
 * 理论
 * 要求
 * 有n件物品和一个最多能背重量为w 的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大。
 * 
 * 背包最大重量为4。
物品为：

       重量 价值
物品0	1	15
物品1	3	20
物品2	4	30

思路:使用动态规划,dp[i][j] 表示 0-i间的物品任取，放进容量为j的背包中能获取到的最大的物品价值
 */

export function _01(weight: number[], value: number[], bagweight: number): number {
    const n: number = weight.length // => 物品数量
    const grid: number[][] = new Array(n).fill(0).map(item => new Array(bagweight + 1).fill(0)) // =>创建二维数组
    // => 二维数组的第一列是 0 , 因为此时背包的重量为 0
    // => 二维数组第一行的 大于物品0的重量的数值是物品0的价值，其余的都是0(因为都小于物品0的重量)
    for (let j = 1; j <= bagweight; j++) { //初始化第一行
        j >= weight[0] && (grid[0][j] = value[0])
    }
    for (let i = 1; i < n; i++) { //递推顺序
        for (let j = 1; j <= bagweight; j++) {
            // !!! => j-weight[i] 可能会小于0 导致grid[i-1][j-weight[i]]变成undefined, undefined + value[i] 变成 NaN 
            grid[i][j] = Math.max(grid[i - 1][j], isNaN(grid[i - 1][j - weight[i]] + value[i]) == true ? 0 : grid[i - 1][j - weight[i]] + value[i]) //递推公式
        }
    }
    console.log(grid) // => 打印数组
    return grid[n - 1][bagweight] // => 返回值
}

const weight: number[] = [1, 3, 4]
const value: number[] = [15, 20, 30]
_01(weight, value, 4)



// 优化空间复杂度(一维数组解决问题)
// 观察递推公式 grid[i][j] = Math.max(grid[i-1][j],grid[i-1][j-weight[i]]+value[i]) 可以发现,grid[i-1]是通用的，我们可以让前一行的数据保留下来来帮助下一行的数据的求解

export function testWeightBagProblem(
    weight: number[],
    value: number[],
    bagweight: number
): number {
    const n: number = weight.length // => 数组长度
    const grid: number[] = new Array(n + 1).fill(0) // => 创建数组
    for (let j = 1; j <= bagweight; j++)
        j >= weight[0] && (grid[j] = value[0]) //初始化数组
    for (let i = 1; i < n; i++) { //递推顺序
        for (let j = bagweight; j >= weight[i]; j--) { //元素不可以重复遍历，所以倒着遍历(有时候判断条件要修改成 j >= 0，因为j >= weight[i]有些情况遍历不到)
            grid[j] = Math.max(grid[j], grid[j - weight[i]] + value[i]) //递推公式
        }
    }
    console.log(grid)
    return grid[bagweight]
}

testWeightBagProblem(weight, value, 4)