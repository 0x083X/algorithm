/**
 * Leecode 1049
 * 要求
 * 有一堆石头，用整数数组 stones 表示。其中 stones[i] 表示第 i 块石头的重量。

每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

如果 x == y，那么两块石头都会被完全粉碎；
如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。

1 <= stones.length <= 30
1 <= stones[i] <= 100

思路:将石头分成两堆，让两堆石头相撞，分成两堆主要看每堆石头的重量和，我们可以把这个问题抽象成01背包问题，石头的重量和价值是一样的，转换成求 背包最大容量下能容纳的最大价值的石头
 */

function lastStoneWeightII(stones: number[]): number {
    const n: number = stones.length // => 物品数量
    const sum: number = stones.reduce((pre, cur) => pre + cur, 0) // => 物品的总价值
    const bagweight: number = Math.floor(sum / 2) // => 背包容量
    const grid: number[][] = new Array(n).fill(0).map(item => new Array(bagweight + 1).fill(0)) // => 定义二维数组
    for (let j = 1; j <= bagweight; j++)
        j >= stones[0] && (grid[0][j] = stones[0]) //初始化
    for (let i = 1; i < n; i++) { //遍历顺序
        for (let j = bagweight; j >= 0; j--) {
            grid[i][j] = Math.max(grid[i - 1][j], isNaN(grid[i - 1][j - stones[i]] + stones[i]) == true ? 0 : grid[i - 1][j - stones[i]] + stones[i])  //递推公式
        } 
    }
    console.log(grid) //打印数组
    return sum - 2 * grid[n - 1][bagweight] //留下来的最大值就是 重量总和 - 背包能背最大重量 * 2
};

export function lastStoneWeightII1(stones: number[]): number {
    const n:number = stones.length // => 石头个数
    const sum:number = stones.reduce((pre,cur)=>pre+cur,0) // => 石头的总重量
    const bagweight:number = Math.floor(sum / 2) // =>背包重量
    const grid:number[] = new Array(bagweight+1).fill(0) // =>初始化背包
    for(let j = 1; j <= bagweight; j++)
        j >= stones[0] && (grid[j] = stones[0]) //初始化背包
    for(let i = 1; i < n; i++) {
        for(let j = bagweight; j >= 0; j--) {
            grid[j] = Math.max(grid[j], isNaN(grid[j-stones[i]] + stones[i]) == true ? 0 : grid[j-stones[i]] + stones[i])
        }
    }
    return sum - 2 * grid[bagweight]
};