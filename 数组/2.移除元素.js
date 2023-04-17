/**
 * Leecode 27
 * 在数组[1,3,2,4,5,7] 中移除 目标值target数值
 */

let a = [1,3,4,2,5,6,5,3,2] , target = 2 

//1.双指针写法
/**
 * fast 用于遍历数组找出属于新数组中的元素
 * slow 表示元素插入到新数组中的索引位置
 * 两个指针工作于一个数组，时间复杂度O(n) , 空间复杂度O(1)
 */
let slow = 0 , fast = 0 ;

//遍历数组找出新数组中的值
for(;fast < a.length - 1 ; fast++) {
    //如果该元素不是target目标值，就代表它属于新数组中，赋值到slow对应的索引上,然后让slow索引值++
    if(a[fast] != target) {
        // a[slow] = a[fast]
        // slow++ 
        a[slow++] = a[fast]
    }
}
//最终的数组长度就是slow的值



//2.暴力解法
/**
 * 暴力解法是用两个for循环来解决问题的 时间复杂度O(n^2) 空间复杂度O(1)
 * 第一个for循环用来寻找nums数组中与target相同的值
 * 第二个for循环用来更新数组
 */

//第一个for循环用来找到target
for(let i = 0 ; i < a.length ; i++) {
    //如果找到了target
    if(a[i] == target) {
        //第二个for循环用来更新数组
        for(let j = i+1 ; j < a.length ; j++){
            a[j-1] = a[j]
        }
        i-- //因为target后的所有元素都向前了一位
        a.length--
    }
}