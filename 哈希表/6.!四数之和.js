/**
 * Leecode 18 
 * 输入值是一个nums数组，和一个目标值target，要求在nums中找出下标值为a,b,c,d(a,b,c,d各不相同)的数，且他们相加的值等于target(可正可负)
 * 思路是
 * 和三数之和的思路相同，就是多加了一重for循环。 两重for循环+双指针
 * 难点在于思路、剪枝、去重
 */

//要返回的数组
const rArray = []
//排序nums
nums.sort((a, b) => a - b)
//第一重for循环()
for (let a = 0; a < nums.length; a++) {
    //剪枝 
    //如果nums[a]的值大于target，且target>0,代表已经不可能再有结果了(数组排序过，后一个肯定比前一个大) (如果target<0的话，nums[a]>target说明不了什么)
        //要大于target而不能等， [0,0,0,0] 0 的情况就不允许我们相等
    if (nums[a] > target && target > 0) { return rArray }
    //去重，如果后面一个数的数值和a相同，代表该数所有可能的结果已经被之前的a获取到了
    if (a > 0 && nums[a] === nums[a - 1]) { continue }

    //第二重for循环
    for (let b = a + 1; b < nums.length; b++) {
        //和第一重for循环一样，需要剪枝和去重
        let temp = nums[a] + nums[b]
        //剪枝，如果前面两个数值大于target(target>0)直接退出该重循环(不过仅仅只是代表这一重循环没有可能了。不能直接return)
        //要大于target而不能等， [0,0,0,0] 0 的情况就不允许我们相等
        if (temp > target && target > 0) { break; }
        //去重
        if (b > a + 1 && nums[b] === nums[b-1]){continue}
        //双指针
        let left = b + 1, right = nums.length - 1
        //left 和 right不相同
        while(left < right){
            let temp = nums[a] + nums[b] + nums[left] + nums[right]
            if(temp < target) {left++}
            else if (temp > target) {right--}
            //如果找到了值
            else if (temp === target) {
                rArray.push([nums[a],nums[b],nums[left],nums[right]])
                //对left和right进行去重
                //如果在找到值之前去重，可能就一个值都找不到 [-1,-1,1,1] 0
                while(left < right && nums[left] == nums[left+1]) {left++}
                while(left < right && nums[right] == nums[right-1]) {right--}
                left++
                right--
            } 
        }
    }
}
return rArray

