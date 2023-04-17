/**
 * Leecode 151
 * 输入值是一个字符串s(前后都可能有空格的存在)，每个单词间有至少一个空格的存在
 * 要求 将s中的前后的空格删除干净，单词顺序!!!调转，单词间有一个空格隔开单词
 * 例子 : s = "  the sky is blue  "  ===>  "blue is sky the"
 * 思路
 * 先用数组中删除指定元素(空格)的双指针的思想，将该删的空格删除干净，然后直接通过reverse反转整个字符串，后单独反转整个字符串中的单个单词，达到效果
 */

//定义反转函数(整体反转、单词反转都通过它)
Array.prototype.newReverse = function(s,left,right){
    // 左闭右开区间 [left,right)
    let flag = Math.floor((left + right)/2)
    for(;left < flag; left++, right--){
        //解构赋值
        [s[left], s[right-1]] = [s[right-1], s[left]] 
    }
}

//将s转为数组
s = s.split('')
//双指针删除空格
let slow = 0 

for(let fast = 0; fast < s.length; fast++) {
    //slow代表新的数组中应该存在的元素，fast代表元素组中的元素(在同一个数组上进行操作)
    //如果fast指向的数据不为 ' '
    if(s[fast] != ' ') {
        //因为字符串中每个单词间需要空格隔开(最开始的不用)
        //去除最开始单词的情况,将空格插入到新数组中，并将slow++
        if(slow != 0) {s[slow++] = ' '}
        //将元素添加进新的数组
        while(fast < s.length && s[fast] != ' '){
            s[slow++] = s[fast++]
        }
    }
}
//改变字符串的长度(将旧字符串变成新的字符串)
s.length = slow
//反转整体字符串
s.newReverse(s,0,s.length)
//反转单个字符(双指针)
let left = 0, right = 0
while(right <= s.length) {
    //left为单词的左区间值，right为单词的右区间值 我们需要[left,right)
    //反转最后一个单词
    if(right == s.length) {
        s.newReverse(s,left,right)
        break
    }
    //如果碰到了' '就说明需要反转单词了 
    if(s[right] == ' '){
        s.newReverse(s,left,right)
        //更改左区间(直接跳过' ')
        left = right + 1
    }
    right++
}
return s.join('')