/**
 * Leecode 541
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
    如果剩余字符少于 k 个，则将剩余字符全部反转。
    如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
    思路
    用for循环一次跳转2k，如果i+k小于s.length，k个，i+k大于s.length就反转剩余的个数
 */
let s ='123', k = 1  
//将string变成数组好操作
let m = s.split('')
//一次跳跃2k
for(let i = 0; i < s.length; i += 2*k) {
    //如果i+k<=s.length，就代表反转 [i,i+k)内的数据
    if(i + k <= s.length) {
        for(let a = i, b = i + k - 1; a < Math.floor((2*i+k)/2); a++,b--) {
            let temp = m[b]
            m[b] = m[a]
            m[a] = temp
            console.log(m)
        }
    }
    //如果 i+k > s.length 就代表反转 [i,s.length)的数据
    else {
        for(let a = i , b = s.length-1; a < Math.floor((i+s.length)/2); a++,b--){
            let temp = m[b]
            m[b] = s[a]
            m[a] = temp
        }
    }
}
return m.join('')