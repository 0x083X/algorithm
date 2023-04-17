/**
 * Leecode 416
 * 要求
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 1 <= nums.length <= 200
1 <= nums[i] <= 100

 * 思路:
 * 可以使用回溯枚举，但是值太大了，会TML。
 * 可以将题目抽象成01背包问题, 背包的大小是 nums和的一半 ， 每一个数据就是一个物品，物品的值和重量相同，dp[i][j]表示 0-i个数，背包容量为j的能容纳的最大价值的数,在本题中j是 nums和的一半， 如果 背包能容纳的最大价值正好是 nums和的一半表示true，否则就是false
 */

export function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((pre,cur)=>pre+cur,0)
    console.log(sum) 
    if(sum % 2 != 0)  { //如果和不是2的倍数
        return false 
    }
    const bagweight = sum / 2 // => 背包的重量
    const grid:number[][] = new Array(nums.length).fill(0).map(item => new Array(bagweight+1).fill(0)) // => 定义数组
    for(let j = 1; j <= bagweight; j++) // => 初始化数组
        j >= nums[0] && (grid[0][j] = nums[0])
    for(let i = 1; i < nums.length; i++) {
        for(let j = 1; j <= bagweight; j++) {
            grid[i][j] = Math.max(grid[i-1][j], isNaN(grid[i-1][j-nums[i]]+nums[i]) == true ? 0 : grid[i-1][j-nums[i]]+nums[i])
        }
    }
    console.log(grid)
    return grid[nums.length-1][bagweight] == bagweight 
};


//用一维数组优化空间复杂度
export function canPartition1(nums: number[]): boolean {
    const sum = nums.reduce((pre,cur)=>pre+cur,0)
    if(sum % 2 != 0)  { //如果和不是2的倍数
        return false 
    }
    const bagweight = sum / 2 // => 背包的重量
    const grid:number[] = new Array(bagweight+1).fill(0) // => 定义数组
    for(let j = 1; j <= bagweight; j++) // => 初始化数组
        j >= nums[0] && (grid[j] = nums[0])
    for(let i = 1; i < nums.length; i++) {
        for(let j = bagweight; j >= nums[i]; j--) { //每个元素不可重复放入，从大到小进行遍历
            grid[j] = Math.max(grid[j],grid[j-nums[i]] + nums[i])
        }
    }
    console.log(grid,grid[bagweight])
    return grid[bagweight] == bagweight 
};