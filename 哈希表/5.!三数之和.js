/**
 * Leecode 15
 * 条件是一个整数数组，要求找出整数数组中三个索引(互不相同)的和为0的三元组，三元组不重复
 * 思路
 * 先将数组排序，然后定义三个指针[a,b,c],a用for循环遍历数组，b、c使用双指针的写法在[a+1,nums)的范围内遍历所有的三数之和为0的情况，在这个过程中要进行去重
 * 难点：去重
 */

const rArray = []
//排序数组
nums.sort((a,b)=>a-b)
//让a遍历数组
for(let a = 0; a < nums.length; a++) {
    if(nums[a] > 0) {return rArray}
    //给a去重
    /**
     * 如果nums[a] == nums[a-1]的话，代表如果a往后遍历，所有可能的三元组的值都已经在a-1的时候已经被遍历过了，添加进数组里了，所以不需要白费力气继续遍历
     */
    if(a > 0 && nums[a] == nums[a-1]){continue}
    let b = a+1, c = nums.length-1 
    //移动双指针(条件a!=b!=c所以b不能等于c)
    while(b < c){
        //如果三数之和小于0，left往左移动
        if(nums[a] + nums[b] + nums[c] < 0) {b++}
        else if (nums[a] + nums[b] + nums[c] > 0) {c--}
        else {
            rArray.push([nums[a],nums[b],nums[c]])
            //找到了一次结果后对b、c进行去重，如果不去重的话，会让三元组内包含多个相同的元素，但是如果在找到结果前去重可能就会导致一个三元组都找不到
            while(b < c && nums[c] == nums[c-1]){c--}
            while(b < c && nums[b] == nums[b+1]){b++}
            b++
            c--
        } 
    }
}
return rArray