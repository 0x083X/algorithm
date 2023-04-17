/**
 * Leecode 406
 * 要求：
 * 假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面 正好 有 ki 个身高大于或等于 hi 的人。
请你重新构造并返回输入数组 people 所表示的队列。返回的队列应该格式化为数组 queue ，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。

1 <= people.length <= 2000
0 <= hi <= 106
0 <= ki < people.length
题目数据确保队列可以被重建

思路:
身高从大到小排，身高相同，k越大越往后排，身高小的元素通过k值来插入到相应的位置
 */

export function reconstructQueue(people: number[][]): number[][] { //96ms 47.2MB
    people.sort((a, b) => {
        if (a[0] == b[0]) return a[1] - b[1]
        return b[0] - a[0]
    }) //排序，h大往前排，h相同k大的往后排
    let n: number = people.length
    for (let i = 0; i < n; i++) { //遍历
        let k = people[i][1] //获取位置
        let temp: number[] = people[i] //获取第i个数 
        for (let j = i - 1; j >= k; j--) { //元素一定是往前移动的，移动[k,i] 的位置
            people[j + 1] = people[j]
        }
        people[k] = temp
    }
    return people
};

//优化
export function reconstructQueue1(people: number[][]): number[][] { //92ms 46.9MB
    people.sort((a, b) => {
        if (a[0] == b[0]) return a[1] - b[1]
        return b[0] - a[0]
    }) //排序，h大往前排，h相同k大的往后排
    let ans: number[][] = []
    for (let i = 0, length = people.length; i < length; i++) { //遍历
        ans.splice(people[i][1], 0, people[i])
    }
    return ans
};