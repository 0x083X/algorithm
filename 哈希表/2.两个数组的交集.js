/**
 * Leecode 349
 * 给定两个数组nums1、num2 ，返回他们的交集，交集中每个元素是唯一值
 * 思路
 * 用set或者数组(数值比较小的话可以)解决
 * -set
 * 将一个数组中的元素存入set中，然后用set来查找另一个数组中元素的值是否在set中存在，如果存在了放入到set结果集中(数字不重复)
 */

//用数组作为参数直接构造set容器
let set1 = new Set(nums1) , rSet = new Set()
for(let i = 0; i < nums2.length; i++) {
    //如果set1中存在该元素,将该元素插入到返回的set容器中
    if(set1.has(nums2[i])) {rSet.add(nums2[i])}
}
//返回 rSet转化成的数组
return Array.from(rSet)


//数组解法
let dp = new Array(1001).fill(0), Rset = new Set()
for(let i = 0; i < nums1.length; i++) {
    dp[nums1[i]] = 1
}
for(let i = 0; i < nums2.length; i++) {
    if(dp[nums2[i]]) {Rset.add(nums2[i])}
}
return Array.from(Rset)
