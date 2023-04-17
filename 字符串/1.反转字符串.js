/**
 * Leecode 344
 * 输入的是一个字符串s，要求将s字符串顺序倒转并输出
 * 思路
 * 前后各一个指针，同时移动、交换数据
 */

for(let left = 0, right = s.length-1; left < Math.floor(s.length/2); left++, right--){
    let temp = nums[right]
    nums[right] = nums[left] 
    nums[left] = temp
}