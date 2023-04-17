// Leecode 704


let nums = [1,1,2,2,3,4,5,6] 

//1. [left,right] 左闭右闭的情况

let right = a.length - 1 , left = 0

/**
 * [1,1] 也是满足 [left,right] 要求的 所以 left 要 <= right
 * target 是二分查找 中需要求的值
 */
while(left <= right) { 
    let middle = (left + right) / 2 ;
    if(target > nums[middle]) {
        left = middle + 1 //满足 区间要求
    }
    else if(target < nums[middle]) {
        right = middle - 1 ; //满足区间要求 
    }
    else{
        return middle ;
    }
}
//没找到的话 
return -1 ;




/**
 * 2.[left,right)的情况 
 */
let left2 = 0 , right2 = nums.length 
while(left2 < right2) {
    let middle = (left2 + right2) / 2;
    if(nums[middle] > target) {
        right2 = middle  
    }
    else if(nums[middle] < target){
        left2 = middle + 1 
    }
    else {
        return middle 
    }
}
return -1