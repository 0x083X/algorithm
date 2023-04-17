/**
 *  Leecode 134
 * 要求
 * 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

给定两个整数数组 gas 和 cost ，如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。

gas.length == n
cost.length == n
1 <= n <= 105
0 <= gas[i], cost[i] <= 104

思路:
先求出最大的油和花费，进行判断，记录每一次耗费的油，如果小于0就代表不合适
 */

export function canCompleteCircuit(gas: number[], cost: number[]): number {
    const gases: number = gas.reduce((pre, cur) => cur + pre)
    const costs: number = cost.reduce((pre, cur) => pre + cur)
    if (costs > gases) //如果到不了 
        return -1
    let curSum: number = 0
    let ans: number = 0
    for (let i = 0; i < gas.length; i++) {
        curSum += gas[i] - cost[i]
        if (curSum < 0) {
            curSum = 0 //重置curSum
            ans = i + 1//重置起始位置            
        }
    }
    return ans
};