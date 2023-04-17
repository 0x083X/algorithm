/**
 * Leecode 209
 * 要求 在数组nums中找出一个最短子数组，要求子数组的和大于 等于target
 * 
 */

let nums = [3,4,5,3,4,1,2] , target = 6 , result = 100000 //result是所求最短子数组长度

//1.双重for循环
/**
 * 思路是枚举所有子数组，然后选择符合题目条件的子数组
 */
for(let i = 0 ; i < nums.length ; i++) { //i代表起始位置
    let sum = 0 
    //如果j从i+1开始的话，会忽略掉nums[i]这个数值
    for(let j = i ; j < nums.length ; j++) {
        sum += nums[j] 
        if(sum >= target) {
            result = min(result,j-i+1)
            break //最短子数组，后面的子数组肯定比第一次要大，所以可以直接舍弃
        }
    }
}
return result

//2.滑动窗口(本质就是双指针,不过注重的是双指针之间的区间)
/**
 * 思路是先固定起始位置，让终止位置往后推移，当子数组内元素和大于target的时候(该起始位置的最小长度的子数组)，然后在调整起始位置，直到新的起始位置到终止位置的子数组的和比target小(找出该终止位置对应的最小长度的子数组)，然后在移动终止位置，重复操作直到终止位置到数组的最后
 */

//i是起始位置
let i = 0 , result1 = 100000 , sum = 0
//j是终止位置
for(let j = 0 ; j < nums.length ; j++) {
    sum += nums[j] 
    //找出该终止位置对应的长度最小的子数组，同时也是相应起始位置对应的长度最小的子数组.
    while(sum >= target) {
        let len = j-i+1
        result1 = min(result1,len) 
        //移动初始位置
        sum -= nums[i]
        i++
    }
}
return result1