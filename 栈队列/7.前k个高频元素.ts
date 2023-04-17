/**
 * Leecode 347
 * 要求:给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 * 思路:
 * 通过map来记录当前元素值以及元素值出现的次数，然后直接根据value排序,输出map中前k个index
 */
export function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map()
    const rArr:number[] = []
    //遍历数组填充map
    for(const num of nums){
        map.set(num,(map.get(num) == undefined ? 0 : map.get(num)) + 1)
    }
    //将map变成二维数组
    const arr:number[][] = Array.from(map)
    //给arr排序,根据value排序
    arr.sort((a,b)=>b[1] - a[1])
    //输出前k个元素然后放入到返回的数组中
    for(let i = 0; i < k; i++){
        rArr.push(arr[i][0])
    }
    return rArr
};
console.log(topKFrequent([1,1,1,2,3,3],2))