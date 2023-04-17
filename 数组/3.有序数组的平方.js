//Leecode 977

/**
 * nums是含有负数的有序数组 , 要求将数组内的元素全部平方后升序排列
 * 首先我们发现最大的值是nums的开头的平方或者是结尾的平方
 * 双指针一个在最前面一个在最后面往中间遍历
 */

let nums = [-4,2,3,5] 

//双指针写法
let k = nums.length - 1 //k是新数组的索引
let newArray = [] 

//如果判断条件 是i<j的话，就会少了i=j位置的那个数据值
for(let i = 0 , j = nums.length - 1; i <= j ; ){
    //如果前面的数大于后面的数
    if(Math.pow(nums[i],2) > Math.pow(nums[j],2) ){
        //将最大的数值放入到 新的数组中,并将新数组的索引-1，i++
        newArray[k--] = Math.pow(nums[i],2) 
        i++
    }
    //如果前面的数小于后面的数
    else{
        newArray[k--] = Math.pow(nums[j],2)
        j--
    }   
}
return newArray