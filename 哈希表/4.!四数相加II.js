/**of
 * Leecode 454
 * 条件给了四个数组 nums1、nums2、nums3、nums4 判断这四个数组中组合相加为0的数组个数
 * 思路
 * 暴力解法是通过4个for循环(时间复杂度n^4)
 * 我们可以将4个for循环拆成两个两个的形式，这样时间复杂度就会缩短成n^2，让nums1\nums2中的数值相加，然后找到nums3\nums4中数值和为 0-(nums1\nums2)的值，这样的思路很容易让我们使用哈希表,
 * 哈希表有3，数组(空间太大舍弃)\set(只能存储一个值)，所以我们选择map(能存储nums1+nums2的值，也可以记录他们出现的次数)
 * 所以思路就是将nums1加nums2的所有可能存入map中，然后遍历nums3+nums4，在map中找出key为0-nums3-nums4的值
 */

let map = new Map(), num = 0
    for(let a of nums1) {
        for(let b of nums2) {
            //注意如果不先用map.has()来判断map中是否存在该数值的话，如果该数值不存在，map.get()就会返回undefined
            if(!map.has(a+b) ){map.set(a+b,1)}
            else {map.set(a+b,map.get(a+b)+1)}
        }
    }
    
    for(let a of nums3){
        for(let b of nums4){
            if(map.has(0-a-b)){
                num += map.get(0-a-b)
            }
        }
    }
    return num
