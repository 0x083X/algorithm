/**
 * Leecode 242
 * 条件是两个字符串，s和t，要求判断s和t中分别出现的字符次数是否相同
 */

/**
 * 一般哈希表有三种解法
 * 1.数组 (数据比较小)
 * 2.set   (数据比较大)
 * 3.map    (ket-value的情况)
 */
//用哈希表的数组解法来解
let dp = new Array(26).fill(0)

//遍历s字符串
for(let i = 0; i < 26; i++) {
    dp[s[i].codePointAt(i)-'a'.codePointAt(0)]++
}
//遍历t字符串
for(let i = 0; i < 26; i++) {
    dp[t[i].codePointAt(i)-'a'.codePointAt(0)]--
}

//遍历hash表，如果出现了非0数值，return fasle
for(let i = 0; i < 26; i++){
    if(dp[i] != 0) return false 
}
return true