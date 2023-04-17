/**
 * Leecode 135
 * 要求
 * n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

你需要按照以下要求，给这些孩子分发糖果：

每个孩子至少分配到 1 个糖果。
相邻两个孩子评分更高的孩子会获得更多的糖果。
请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。

n == ratings.length
1 <= n <= 2 * 104
0 <= ratings[i] <= 2 * 104

思路
先判断左边孩子和右边孩子关系得到糖果，在判断右边孩子和左边孩子的关系得到糖果
左边糖果集合的遍历顺序是从前向后，右边糖果集合的遍历顺序是从后向前
 */

export function candy(ratings: number[]): number { //100ms 46.8MB
    let leftR: number[] = [1] //左边糖果集合
    let rightR: number[] = new Array(ratings.length).fill(1) //右边糖果集合
    for (let i = 1; i < ratings.length; i++) { //左边
        if (ratings[i] > ratings[i - 1]) //如果rating比前面的大
            leftR.push(leftR[leftR.length - 1] + 1) //比之前的糖果数大1
        else leftR.push(1) //小于等于都放1
    }
    for (let i = ratings.length - 2; i >= 0; i--) { //右边
        if (ratings[i] > ratings[i + 1]) { //如果比右边大
            rightR[i] = rightR[i + 1] + 1
        }
        else rightR[i] = 1 //如果小于等于变成1
    }
    for (let i = 0; i < ratings.length; i++) {
        leftR[i] = Math.max(leftR[i], rightR[i]) //取左右集合中最大的数
    }
    return leftR.reduce((pre, cur) => pre + cur)
};

//优化代码
export function candy1(ratings: number[]): number { //76ms 46MB
    let candies:number[] = [1] //糖果集合
    for (let i = 1; i < ratings.length; i++) { //左边
        if (ratings[i] > ratings[i - 1]) //如果rating比前面的大
            candies[i] = candies[i-1] + 1 
        else candies[i] = 1  //小于等于都放1
    }
    for (let i = ratings.length - 2; i >= 0; i--) { //右边
        if (ratings[i] > ratings[i + 1]) { //如果比右边大
            candies[i] = Math.max(candies[i],candies[i+1] + 1)//比较左右哪个大
        }
         //如果小于等于变成1(最小就是1，左边的肯定大于等于1，所以直接取左边的值不需要改变)
    }
    return candies.reduce((pre, cur) => pre + cur)
};