/**
 * Leecode 59
 * 给一个整数n，生成1-n^2所有元素，按顺时针顺序螺旋排列的矩阵
 * 核心是循环不变量(区间不变，左闭右开[) )
 * 
 */


//一次循环遍历会创造两条边的数据，所以需要循环n/2遍。如果n是奇数，那么遍历完成之后还有中间一个空需要我们单独赋值

let n = 3 
//定义二维数组(n*n)
let nums = Array.from(Array(n), () => new Array(n));
    let circle = Math.floor(n/2) //循环次数
let startx = 0 , starty = 0 //起始位置坐标
let i = 0 , j = 0 //变化的坐标
let offset = 1 //控制左闭右开的变量
let count = 1 //存入数组的数值
//遍历n/2遍
while(circle--) {
    //每重新一次循环，让i和j等于起始坐标
    i = startx , j = starty

    //矩阵上面那条边的赋值语句 [)
    for(; j < n-offset ; j++) {
        nums[i][j] = count++ 
    }
    //矩阵右边那条边的赋值语句
    for(; i < n-offset ; i++) {
        nums[i][j] = count++
    }
    //矩阵下面那条边的赋值语句
    for(; j > starty; j--) {
        nums[i][j] = count++
    }
    //矩阵左边那条边的赋值语句
    for(; i > startx; i--) {
        nums[i][j] = count++
    }
    offset++
    startx++
    starty++
}
if(n%2 == 1) {
    nums[startx][starty] = count
}
