/**
 * Leecode 1
 * 条件是一个整数数组nums 和一个整数目标值target，要求在nums中找出两个和为target的数，并返回他们的下标
 * 思路
 * 我们首先遍历数组，假设到i位置，我们想在数组中查找是否有一个数的数值是target-nums[i],当我们想在集合里查找一个数的时候我们自然的就想到哈希表
 * 哈希表有三种，数组、set、map，数组适合有序的情况，set也不是很适合，set只能存储一个数据，没有关联性，这样我们就联想到map，那么如何使用这种key-value的结构呢
 * 首先我们想查找值为 target-nums[i]的，那么map中的key值就应该按 元素的值来排序，这样方便判断map中是否存在该数据，然后value值存储的就是该值的下标，照样方便我们找到该数值的位置，如果在map中没有找到该数值，就将 {nums[i],i} 添加进map中。
 */

let map = new Map()
for(let i = 0; i < nums.length; i++) {
    //获取target-nums[i]的值
    let value = target - nums[i]
    //在map中查找是否存在该值
    //如果存在返回二者的下标
    if(map.has(value)) { return [map.get(value),i] }
    //如果不存在就将该值添加进map容器中
    else{
        map.set(nums[i],i)
    }
}

